import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="text-gray-600 mb-8 text-center">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you use our Video
          Downloader App.
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p>
              Our app does not require you to create an account or provide
              personal details. The only information we collect is:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Video URLs that you provide to download content.</li>
              <li>
                Basic technical information (such as device type and browser)
                for performance and troubleshooting.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. How We Use Information
            </h2>
            <p>The information collected is used strictly to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Process your video download requests.</li>
              <li>Improve app functionality and user experience.</li>
              <li>Monitor and fix performance issues.</li>
            </ul>
            <p>
              We do not sell, rent, or share your information with third
              parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. Cookies & Tracking
            </h2>
            <p>
              Our app does not use cookies for tracking purposes. However, basic
              analytics tools may be used to understand app usage and
              performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              4. Third-Party Services
            </h2>
            <p>
              The app may interact with third-party video platforms (e.g.,
              YouTube, Facebook, Instagram, X/Twitter) to fetch metadata and
              content. We are not responsible for the privacy practices of these
              platforms, and their use is governed by their respective policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
            <p>
              We take reasonable measures to protect the limited information we
              process. However, please note that no method of transmission over
              the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              6. Children's Privacy
            </h2>
            <p>
              Our app is not directed toward children under 13, and we do not
              knowingly collect personal information from children. If you
              believe a child has provided us with information, please contact
              us so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              7. Changes to Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with the updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <span className="font-medium text-blue-600">
                support@dreamwaveinnovation.com
              </span>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
