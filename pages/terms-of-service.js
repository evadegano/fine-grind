import { siteTitle, mainImage, mainDesc } from "../styles/chart";
import Layout from "../components/layout";

const TermsService = () => {
  return (
    <Layout
      title={`Terms of Service | ${siteTitle}`}
      image={mainImage}
      desc={mainDesc}
    >
      <section className="plain-page">
        <h1>Terms of Service for the Inner Wealth Journey</h1>
        <p>Last updated: 16/02/2024</p>

        <p>
          Welcome to Inner Wealth Journey! These terms and conditions outline
          the rules and regulations for the use of Inner Wealth Journey's
          Website, located at https://www.innerwealthjourney.com.
        </p>

        <p>
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use Inner Wealth Journey if you do not
          agree to take all of the terms and conditions stated on this page.
        </p>

        <h2>Intellectual Property Rights</h2>
        <p>
          Other than the content you own, under these Terms, Inner Wealth
          Journey and/or its licensors own all the intellectual property rights
          and materials contained in this Website. You are granted a limited
          license only for purposes of viewing the material contained on this
          Website.
        </p>

        <h2>Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>
            Publishing any website material in any other media without crediting
            it
          </li>
          <li>
            Selling, sublicensing and/or otherwise commercializing any website
            material
          </li>
          <li>
            Publicly performing and/or showing any website material without
            crediting it
          </li>
          <li>
            Using this Website in any way that is or may be damaging to this
            Website
          </li>
          <li>
            Using this Website in any way that impacts user access to this
            Website
          </li>
          <li>
            Using this Website contrary to applicable laws and regulations, or
            in any way may cause harm to the Website, or to any person or
            business entity
          </li>
          <li>
            Engaging in any data mining, data harvesting, data extracting or any
            other similar activity in relation to this Website
          </li>
        </ul>

        <h2>User Content</h2>
        <p>
          In these Website Standard Terms and Conditions, "Your Content" shall
          mean any audio, video text, images or other material you choose to
          display on this Website. By displaying Your Content, you grant Inner
          Wealth Journey a non-exclusive, worldwide irrevocable, sub licensable
          license to use, reproduce, adapt, publish, translate and distribute it
          in any and all media.
        </p>

        <p>
          Your Content must be your own and must not be invading any
          third-party's rights. Inner Wealth Journey reserves the right to
          remove any of Your Content from this Website at any time without
          notice.
        </p>

        <h2>No warranties</h2>
        <p>
          This Website is provided "as is," with all faults, and Inner Wealth
          Journey express no representations or warranties, of any kind related
          to this Website or the materials contained on this Website. Also,
          nothing contained on this Website shall be interpreted as advising
          you.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          In no event shall Inner Wealth Journey, nor any of its officers,
          directors and employees, be held liable for anything arising out of or
          in any way connected with your use of this Website whether such
          liability is under contract. Inner Wealth Journey, including its
          officers, directors and employees shall not be held liable for any
          indirect, consequential or special liability arising out of or in any
          way related to your use of this Website.
        </p>

        <h2>Indemnification</h2>
        <p>
          You hereby indemnify to the fullest extent Inner Wealth Journey from
          and against any and/or all liabilities, costs, demands, causes of
          action, damages and expenses arising in any way related to your breach
          of any of the provisions of these Terms.
        </p>

        <h2>Severability</h2>
        <p>
          If any provision of these Terms is found to be invalid under any
          applicable law, such provisions shall be deleted without affecting the
          remaining provisions herein.
        </p>

        <h2>Variation of Terms</h2>
        <p>
          Inner Wealth Journey is permitted to revise these Terms at any time as
          it sees fit, and by using this Website you are expected to review
          these Terms on a regular basis.
        </p>

        <h2>Assignment</h2>
        <p>
          The Inner Wealth Journey is allowed to assign, transfer, and
          subcontract its rights and/or obligations under these Terms without
          any notification. However, you are not allowed to assign, transfer, or
          subcontract any of your rights and/or obligations under these Terms.
        </p>
      </section>
    </Layout>
  );
};

export default TermsService;
