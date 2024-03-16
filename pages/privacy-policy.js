import { siteTitle, mainImage, mainDesc } from "../styles/chart";
import Layout from "../components/layout";

const PrivacyPolicy = () => {
  return (
    <Layout
      title={`Privacy Policy | ${siteTitle}`}
      image={mainImage}
      desc={mainDesc}
    >
      <section className="plain-page">
        <h1>Privacy Policy for the Inner Wealth Journey</h1>
        <p>Last updated: 16/02/2024</p>

        <p>
          At Inner Wealth Journey, accessible from
          https://www.innerwealthjourney.com, one of our main priorities is the
          privacy of our visitors. This Privacy Policy document contains types
          of information that is collected and recorded by Inner Wealth Journey
          and how we use it.
        </p>

        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us through email at
          innerwealthjourney@gmail.com.
        </p>

        <h2>Personal Information Collection</h2>
        <p>
          We collect various types of information for various purposes to
          provide and improve our Website for you. Types of Data collected
          include:
        </p>
        <ul>
          <li>Name</li>
          <li>Email Address</li>
          <li>Date of Birth</li>
        </ul>

        <h2>Usage of Information</h2>
        <p>The information we collect is used in various ways, including:</p>
        <ul>
          <li>
            Improving website functionality with personalized Numerology content
          </li>
          <li>Sending email newsletters</li>
          <li>Account creation and management</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not personally share your data. However, we use third-party
          services that may collect information used to identify you.
          Third-party services include Google Tag Manager, Meta Pixel, Yandex
          Metrica, and Google Analytics.
        </p>

        <h2>Cookies and Tracking Technology</h2>
        <p>
          We use cookies and similar tracking technologies to track the activity
          on our Service and hold certain information. Tracking technologies
          used are beacons, tags, and scripts to collect and track information
          and to improve and analyze our Service.
        </p>

        <h2>Data Security</h2>
        <p>
          Your data security is important to us, but remember that no method of
          transmission over the Internet, or method of electronic storage is
          100% secure. While we strive to use commercially acceptable means to
          protect your Personal Information, we cannot guarantee its absolute
          security. Our security measures include:
        </p>
        <ul>
          <li>
            SSL/TLS Encryption: All data transmitted between your browser and
            our website is encrypted using Secure Socket Layer (SSL) or
            Transport Layer Security (TLS) technology.
          </li>
          <li>
            Secure Server Hosting: Our website is hosted on secure servers that
            are managed to prevent unauthorized access.
          </li>
          <li>
            Data Access Controls: We limit access to personal information to
            employees, contractors, and agents who need to know that information
            in order to process it on our behalf. They are subject to strict
            confidentiality obligations and may be disciplined or terminated if
            they fail to meet these obligations.
          </li>
          <li>
            Regular Security Audits: We conduct regular security audits and
            monitor our systems for possible vulnerabilities and attacks to
            ensure the ongoing security of our systems.
          </li>
        </ul>

        <h2>User Rights</h2>
        <p>As a user of our website, you have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>
            Request the correction of any incorrect or incomplete information
          </li>
          <li>
            Request the deletion of your personal information from our systems
          </li>
        </ul>
        <p>
          To exercise these rights, you can either go to your account space or
          contact us directly at our email: innerwealthjourney@gmail.com.
        </p>

        <h2>Policy Updates</h2>
        <p>
          Our Privacy Policy may be updated from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page and
          updating the "last updated" date at the top of this document. We will
          also inform you via email of significant changes.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <ul>
          <li>Email: innerwealthjourney@gmail.com</li>
        </ul>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
