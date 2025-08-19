import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // Icon for expand/collapse

const faqs = [
  {
    question: "What is this app used for?",
    answer:
      "This app allows you to download videos from supported platforms like YouTube, Facebook, Instagram, and X (Twitter) in different resolutions.",
  },
  {
    question: "Is the app free to use?",
    answer:
      "Yes! The app is completely free to use. However, please make sure you respect copyright and only download videos for personal use or where you have permission.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Currently, the app supports YouTube, Facebook, Instagram, and X (Twitter). More platforms will be added soon.",
  },
  {
    question: "Can I choose the video resolution?",
    answer:
      "Yes, after entering a valid video link, you can select from the available resolutions before downloading.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No installation is required. You can use the app directly from your browser on desktop or mobile.",
  },
];

const FaqsPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center p-5 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-blue-500" : "text-gray-500"
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 px-5 ${
                openIndex === index ? "max-h-40 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsPage;
