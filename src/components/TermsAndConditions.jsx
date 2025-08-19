import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Please read these terms and conditions carefully before using our
          Video Downloader App.
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using this app, you agree to be bound by these
              Terms & Conditions. If you do not agree, you may not use the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Purpose of the App
            </h2>
            <p>
              The Video Downloader App is designed to help users download videos
              from supported platforms (YouTube, Facebook, Instagram, X/Twitter,
              etc.) for personal and non-commercial use only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>You agree not to use the app for any illegal activities.</li>
              <li>
                You are solely responsible for ensuring that your use of
                downloaded videos complies with copyright laws and the terms of
                service of the respective platforms.
              </li>
              <li>
                You agree not to distribute, resell, or use downloaded videos
                for commercial purposes without proper authorization.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              4. Supported Platforms
            </h2>
            <p>
              The app currently supports YouTube, Facebook, Instagram, and X
              (Twitter). We do not guarantee that all videos from these
              platforms can be downloaded due to platform restrictions or
              updates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              5. Intellectual Property Rights
            </h2>
            <p>
              All content downloaded through this app remains the intellectual
              property of the respective content owners. The app does not claim
              ownership of any downloaded content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              6. Disclaimer of Warranties
            </h2>
            <p>
              The app is provided "as is" without any warranties. We do not
              guarantee uninterrupted, error-free, or virus-free operation of
              the app. Availability of download options may vary depending on
              platform changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              7. Limitation of Liability
            </h2>
            <p>
              We are not liable for any damages, losses, or legal consequences
              resulting from the use of this app, including misuse of downloaded
              content or violation of third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms & Conditions
              at any time. Continued use of the app after changes constitutes
              acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
            <p>
              If you have questions about these Terms & Conditions, please
              contact us at{" "}
              <span className="font-medium text-blue-600">
                {" "}
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

export default TermsAndConditions;
