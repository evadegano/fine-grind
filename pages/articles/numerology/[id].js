import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  getAllPostIds,
  getSortedPostsData,
  getPostData,
} from "../../../lib/posts";
import { title_font } from "../../../styles/fonts";
import { siteTitle } from "../../../styles/chart";
import Layout from "../../../components/layout";
import PostLayout from "../../../components/postLayout";

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostData(params.id);
  const posts = getSortedPostsData();
  return {
    props: {
      post,
      posts,
    },
  };
};

const Header = ({ post }) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useLayoutEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, [ref]);

  return (
    <section
      ref={ref}
      className="mobile-col"
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "40px",
        paddingTop: "20px",
      }}
    >
      <div className="one-half" style={{ gap: "20px" }}>
        <h1 className="title" style={title_font.style}>
          {post.title}
        </h1>
        <p className="subtitle">{post.abstract}</p>

        <div>
          <p style={{ fontWeight: "bold" }}>
            If you're looking to become financially free, retire early and live
            a life of greatness, feel free to get your weekly money and business
            reading based on your unique numerology chart.
          </p>
          <Link className="btn" href="/newsletter">
            FREE WEEKLY WEALTH READING
          </Link>
        </div>
      </div>

      <div
        className="img one-half"
        style={{
          height: `${height}px`,
          backgroundImage: `url(${post.image})`,
        }}
      ></div>
    </section>
  );
};

const SideNavbar = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    console.log("headings", document.querySelectorAll("h2"));
    const headings = Array.from(
      document
        .querySelectorAll("h2")
        .map((e) => ({ id: e.id, title: e.innerText })),
    );
    setHeadings(headings);
  }, []);

  return (
    <div className="one-quarter" style={{ position: "sticky" }}>
      <ul>
        {headings.map((h) => (
          <li key={h.title}>
            <Link
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${h.id}`).scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {h.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

const PostPage = ({ post, posts }) => {
  const { data: session } = useSession();
  const scope = post.scope;
  const hideContent = scope !== "public" && !session;

  return (
    <Layout
      title={`${post.title} | ${siteTitle}`}
      image={post.image}
      desc={post.metadescription}
    >
      <Header post={post} />
      <section>
        <div style={{ display: "flex" }}>
          {/* <SideNavbar /> */}

          <div className="article">
            <div className="one-half">
              <PostLayout
                content={post.contentHtml}
                hideContent={hideContent}
              />

              <div className="highlighted-section">
                <p>
                  Speed up your process to financial independance with a free
                  weekly money and business reading based on your unique
                  Numerology and Astrology charts.
                </p>
                <Link className="btn" href="/newsletter">
                  FREE WEEKLY WEALTH READING
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PostPage;
