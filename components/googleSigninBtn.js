import { useEffect } from "react";
import { signIn } from "next-auth/react";

const GoogleSigninBtn = ({ onSuccess }) => {
  const handleCredentialResponse = async (res) => {
    console.log("Encoded JWT ID token: " + res.credential);
    const result = await signIn("googleonetap", {
      credential: res.credential,
      redirect: false,
    });

    if (result?.error) {
      console.error(result.error);
    } else if (onSuccess) {
      onSuccess();
    }
  };

  useEffect(() => {
    window.onload = function () {};

    const { google } = window;
    if (google) {
      google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_ID,
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById("google-signin"),
        { theme: "outline", size: "large" }, // customization attributes
      );
      // google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }, []);

  return <div id="google-signin" />;
};

export default GoogleSigninBtn;
