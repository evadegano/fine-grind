import { getSortedPostsData } from "../../../lib/posts";
import { title_font } from "../../../styles/fonts";
import { siteTitle, mainImage, mainDesc } from "../../../styles/chart";
import Layout from "../../../components/layout";

export const getStaticProps = () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
};

const Numerology = ({ posts }) => {
  return (
    <Layout
      title={`Numerology | ${siteTitle}`}
      image={mainImage}
      desc={mainDesc}
    >
      <section
        className="mobile-col"
        id="about"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          gap: "40px",
          marginTop: "20px",
        }}
      >
        <h1 className="one-third" style={title_font.style}>
          Unlock your path to wealth with Numerology
        </h1>
        <p className="two-thirds subtitle">
          Welcome to our Numerology Articles page, where we delve deep into the
          wisdom of numbers to unlock the secrets of your unique cosmic
          blueprint. Each article is designed to increase your understanding of
          how to harness the power of numbers to become financially free. From
          finding your edge in business to understanding the challenges you're
          meant to overcome before attracting abundance, we provide you with
          actionable guidance to break free from the norms and manifest your
          dreams.
        </p>
      </section>
    </Layout>
  );
};

export default Numerology;
