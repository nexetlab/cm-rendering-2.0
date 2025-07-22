import '../styles/privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1>Privacy Policy for C & M Rendering</h1>
        
        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to C & M Rendering. We respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, and protect your information when you visit our website 
            or engage with our services. It also outlines your rights and how the law protects you.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Data We Collect</h2>
          <p>
            We may collect, use, store, and share different types of personal data, which we group into the following categories:
          </p>
          <ul>
            <li><strong>Identity Data:</strong> First name, last name, or any other identifying information you provide</li>
            <li><strong>Contact Data:</strong> Email address, phone number, or other contact details</li>
            <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting and location, operating system, and platform</li>
            <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when legally permitted. Most commonly, we use your data to:
          </p>
          <ul>
            <li>Provide information, products, or services that you request from us</li>
            <li>Improve our website, services, and customer experience through analytics</li>
            <li>Maintain and protect our business and website (including troubleshooting, support, and maintenance)</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Disclosure of Your Data</h2>
          <p>
            We may share your personal data with trusted third parties in accordance with legal obligations and for business purposes, including:
          </p>
          <ul>
            <li>Service providers for IT and website support</li>
            <li>Professional advisers (e.g., legal, financial, and insurance)</li>
            <li>Regulatory authorities when required by law</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>5. Data Security</h2>
          <p>
            We have implemented security measures to protect your data from unauthorized access, use, alteration, or disclosure. 
            We also limit access to your data to those employees and partners who have a legitimate business need.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Your Legal Rights</h2>
          <p>
            You may have rights under applicable privacy laws to:
          </p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct or update inaccurate information</li>
            <li>Request erasure of your data</li>
            <li>Restrict or object to processing</li>
            <li>Request the transfer of your data</li>
            <li>Withdraw consent at any time (where consent is the basis for processing)</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the details below.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your data, 
            please get in touch via the Contact page on our website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;