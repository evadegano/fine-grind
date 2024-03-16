import { title_font } from "../styles/fonts";
import { siteTitle, mainImage, mainDesc } from "../styles/chart";
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Map from "../components/map";

export const getStaticProps = () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
};

const About = () => {
  return (
    <section
      id="about"
      className="mobile-col"
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2 className="one-third" style={title_font.style}>
        Welcome to the <br />
        {siteTitle}
      </h2>
      <p className="two-thirds" style={{ fontSize: "1.3em" }}>
        We believe in breaking free from the norms and living life on your own
        terms. And this starts with financial freedom. On our own journey
        towards wealth, we discovered that tapping into your cosmic blueprint is
        the fastest path to get there. It's like having a secret roadmap that
        guides you to where you want to be, quicker than you ever thought
        possible.
        <br />
        Through Numerology, we give you the keys to unlock your unique pathway
        to inner and outer wealth. And you'll discover that once you live in
        alignment with your soul, the Universe unfolds treasures beyond your
        wildest dreams.
        <br />
        This is your invitation to transform your existence into one of
        abundance, alignment, and unimaginable reward.
      </p>
    </section>
  );
};

const Home = ({ posts }) => {
  return (
    <Layout
      title={`The ${siteTitle} | Seek More.`}
      image={mainImage}
      desc={mainDesc}
    >
      <Hero />
      <Map />
      <About />
    </Layout>
  );
};

export default Home;
