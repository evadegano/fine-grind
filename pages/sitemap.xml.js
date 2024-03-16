//pages/sitemap.xml.js
import { getSortedPostsData } from "../lib/posts";

const siteURL = "https://innerwealthjourney.com";

const generateSiteMap = (posts) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the URLs we know already-->
     <url>
       <loc>${siteURL}</loc>
     </url>
     <url>
       <loc>${`${siteURL}/articles/numerology`}</loc>
     </url>
     <url>
       <loc>${`${siteURL}/newsletter`}</loc>
     </url>
     <url>
       <loc>${`${siteURL}/privacy-policy`}</loc>
     </url>
     <url>
       <loc>${`${siteURL}/terms-of-service`}</loc>
     </url>
     ${posts
       .map(({ url }) => {
         return `
       <url>
           <loc>${`${siteURL}${url}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
};

const SiteMap = () => {
  // getServerSideProps will do the heavy lifting
};

export async function getServerSideProps({ res }) {
  const posts = getSortedPostsData();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
