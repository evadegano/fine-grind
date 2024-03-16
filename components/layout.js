import Head from "next/head";
import Link from "next/link";
import { siteTitle } from "../styles/chart";
import OneTapSignin from "./oneTapSignin";
import Navbar from "./navbar";

const Layout = ({ title, image, desc, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={desc} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="/homepage.webp" />
      </Head>

      <main>
        <Navbar />
        {/* <OneTapSignin /> */}
        {children}
      </main>

      <footer>
        <p>Copyright © 2024 {siteTitle}. All rights reserved.</p>
        <ul style={{ margin: "5px" }}>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="mailto:innerwealthjourney@gmail.com">Contact</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-of-service">Terms of Service</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
