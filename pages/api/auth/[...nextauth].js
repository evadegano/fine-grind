import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { OAuth2Client } from "google-auth-library";
import prisma from "../../../lib/prisma";

const googleAuthClient = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_ID);
const adapter = PrismaAdapter(prisma);

export const authOptions = {
  adapter,
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET ?? "",
    }),
    CredentialsProvider({
      // We will use this id later to specify for what Provider we want to trigger the signIn method
      id: "googleonetap",
      name: "google-one-tap",

      // This means that the authentication will be done through a single credential called 'credential'
      credentials: {
        credential: { type: "text" },
      },
      // This function will be called upon signIn
      authorize: async (credentials) => {
        // These next few lines are simply the recommended way to use the Google Auth Javascript API as seen in the Google Auth docs
        // What is going to happen is that the Google One Tap UI will make an API call to Google and return a token associated with the user account
        // This token is then passed to the authorize function and used to retrieve the customer information (payload).
        // If this doesn't make sense yet, come back to it after having seen the custom hook.

        const token = credentials.credential;
        const ticket = await googleAuthClient.verifyIdToken({
          idToken: token,
          audience: process.env.NEXT_PUBLIC_GOOGLE_ID,
        });

        const payload = ticket.getPayload();
        if (!payload)
          throw new Error("Cannot extract payload from signin token");

        const { email, sub, email_verified, given_name, family_name } = payload;
        if (!email) throw new Error("Email not available");

        // At this point we have deconstructed the payload and we have all the user's info at our disposal.
        // So first we're going to do a check to see if we already have this user in our DB using the email as identifier.
        let user = await adapter.getUserByEmail(email);
        console.log("found user", user);
        // If no user is found, then we create one.
        if (!user) {
          user = await adapter.createUser({
            email,
            emailVerified: email_verified ? new Date() : null,
            first_names: given_name,
            last_name: family_name,
          });
        }

        // The user may already exist, but maybe it signed up with a different provider. With the next few lines of code
        // we check if the user already had a Google account associated, and if not we create one.
        let account = await adapter.getUserByAccount({
          provider: "google",
          providerAccountId: sub,
        });

        if (!account && user) {
          console.log("creating and linking account");
          await adapter.linkAccount({
            userId: user.id,
            provider: "google",
            providerAccountId: sub,
            type: "credentials",
          });
        }

        // The authorize function must return a user or null
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      // user here is the user object from the database after successful authentication
      // Fetch additional user details from the database, if not already included
      const userDetails = await prisma.user.findUnique({
        where: { email: user.email },
      });

      // Append additional details to the session's user object
      if (userDetails) {
        session.user.birthday = userDetails.birthday;
        session.user.firstName = userDetails.first_name;
      }

      return session;
    },
  },
};

const auth = async (req, res) => {
  return await NextAuth(req, res, authOptions);
};

export default auth;
