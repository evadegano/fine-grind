import {
  getAllPostIds,
  getSortedPostsData,
  getPostData,
} from "../../lib/posts";
import { siteTitle } from "../../styles/chart";
import Layout from "../../components/layout";

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
};


const PostPage = ({ post }) => {
  console.log("post", post)
  return (
    <Layout
      title={`${post.title} | ${siteTitle}`}
      image={post.image}
      desc={post.metadescription}
    >
      <section>
        <div style={{ display: "flex" }}>

          <div className="article">
            <div className="one-half">
            <div
              dangerouslySetInnerHTML={{
                __html: post.contentHTML,
              }}
            />
            
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PostPage;
