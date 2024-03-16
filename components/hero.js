import Link from "next/link";
import { title_font } from "../styles/fonts";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-header">
        <h1 className="hero-title" style={title_font.style}>
          Seek more.
        </h1>
        <p className="subtitle" style={{ maxWidth: "700px" }}>
          Our blog shows you how to leverage Numerology and Astrology to become
          financially free, retire early and live a life of greatness.
        </p>
      </div>

      <p
        style={{
          maxWidth: "500px",
          fontWeight: "bold",
          marginBottom: "0",
          marginTop: "0",
        }}
      >
        Speed up the process with a free weekly money and business reading based
        on your unique Numerology and Astrology charts.
      </p>
      <Link className="btn" href="/newsletter">
        FREE WEEKLY WEALTH READING
      </Link>

      <div className="img hero-img"></div>
    </section>
  );
};

export default Hero;
