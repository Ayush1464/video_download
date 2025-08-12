import React, { useState } from "react";

const TwitterHero = () => {
  const [videoURL, setVideoURL] = useState("");

  const handleSearch = () => {
    if (!videoURL.trim()) {
      alert("Please enter a YouTube video URL");
      return;
    }

    // For now, just log it (replace this with backend call later)
    console.log("Searching for:", videoURL);

    // You can add API logic here to send URL to your backend
  };

  return (
    <div className="w-full bg-gray-100 py-12 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Download Twitters Instantly
      </h1>
      <p className="text-lg mb-8 text-gray-600">
        Paste the Twitter link below to download in seconds.
      </p>

      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Enter Twitter video URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="w-full md:w-auto px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default TwitterHero;
