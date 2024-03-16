import Link from "next/link";
import { title_font } from "../styles/fonts";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-header one-half">
        <h1 className="hero-title" style={title_font.style}>
        Find your new favorite café to work at
        </h1>
        <p className="subtitle" style={{ maxWidth: "700px" }}>
        Be like at home, everywhere. Sip good coffee and enjoy a work environment like you’re a local. Find the best coffee soul place.
Ever wonder where to work in a new city?
We got you cover, our coffee and work experts have tamed the best café out there just to give you the fine grind.
What an exciting time to drink a latté !
        </p>

        <Link className="btn" href="/blog">
        Explore cafés
        </Link>
      </div>

      <div className="img hero-img one-half"></div>
    </section>
  );
};

export default Hero;
