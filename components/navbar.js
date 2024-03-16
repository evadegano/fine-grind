import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { siteTitle } from "../styles/chart";
import { title_font } from "../styles/fonts";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <>
      <nav
        role="navigation"
        aria-label="main navigation"
        className="desktop-nav"
      >
        <div>
          <Link href="/">
            <div
              className={title_font.className}
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {siteTitle}
            </div>
          </Link>
        </div>

        <div>
          <Link href="/articles/numerology">Articles</Link>
          <Link className="btn" href="/newsletter">
            FREE WEEKLY WEALTH READING
          </Link>

          {session && <button onClick={() => signOut()}>Log out</button>}
        </div>
      </nav>

      <nav
        role="navigation"
        aria-label="main navigation"
        className="mobile-nav"
      >
        <div>
          <Link href="/">
            <div
              className={title_font.className}
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              IWJ
            </div>
          </Link>
        </div>

        <div>
          <Link href="/articles/numerology">Articles</Link>
          <Link className="btn" href="/newsletter">
            FREE READING
          </Link>

          {session && <button onClick={() => signOut()}>Log out</button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
