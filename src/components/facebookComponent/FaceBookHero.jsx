import React, { useState } from "react";
import toast from "react-hot-toast";

const FaceBookHero = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [videoURL, setVideoURL] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedResolution, setSelectedResolution] = useState("");
  const [isDownloading, setIsDownloading] = useState(false); // New state

  const handleSearch = async () => {
    if (!videoURL.trim()) {
      toast.error("Please enter a YouTube video URL");
      return;
    }

    setLoading(true);
    setVideoData(null);
    setSelectedResolution("");

    try {
      const response = await fetch(
        `${backendUrl}/api/instagram-video/extract-metadata/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: videoURL }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch video metadata");
      }

      const data = await response.json();
      setVideoData(data);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Could not fetch video data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!selectedResolution) {
      toast.error("Please select a resolution");
      return;
    }

    setIsDownloading(true);

    try {
      const downloadResponse = await fetch(
        `${backendUrl}/api/instagram-video/download/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: videoURL,
            resolution: selectedResolution,
          }),
        }
      );

      if (!downloadResponse.ok) {
        throw new Error("Failed to initiate download");
      }

      const blob = await downloadResponse.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = `${videoData.title || "video"}.mp4`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      toast.success("Video downloaded successfully!");
      setVideoData(null);
      setVideoURL("");
      setSelectedResolution("");
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Download failed.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full bg-gray-100 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Download Facebook Videos Instantly
      </h1>
      <p className="text-lg mb-8 text-gray-600">
        Paste the FaceBook video link below to download in seconds.
      </p>

      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Enter FaceBook video URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="w-full md:w-auto px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>
      {videoData && (
        <div className="mt-16 max-w-5xl mx-auto px-6 md:px-10 font-sans text-gray-900">
          <h1 className="text-4xl font-semibold mb-6 tracking-tight leading-tight">
            {videoData.title}
          </h1>

          {videoData.thumbnail && (
            <div className="w-full aspect-video overflow-hidden rounded-lg">
              <img
                src={videoData.thumbnail}
                alt="Video Thumbnail"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}

          <div className="mb-8">
            <label
              htmlFor="resolution"
              className="text-lg font-medium mb-2 block"
            >
              Select Resolution
            </label>
            <select
              id="resolution"
              value={selectedResolution}
              onChange={(e) => setSelectedResolution(e.target.value)}
              className="appearance-none bg-transparent border-b-2 border-gray-400 focus:border-blue-600 outline-none px-1 py-2 text-lg w-full transition duration-200"
            >
              <option value="">-- Choose an option --</option>
              {videoData.available_resolutions.map((res) => (
                <option key={res} value={res}>
                  {res}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-10">
            <button
              onClick={handleDownload}
              disabled={!selectedResolution || isDownloading}
              className={`w-full md:w-auto px-6 py-3 text-lg rounded-full transition ${
                isDownloading
                  ? "bg-gray-400 text-white cursor-wait"
                  : "bg-black text-white hover:bg-gray-900"
              } disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              {isDownloading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Downloading...
                </div>
              ) : (
                "Download Video"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaceBookHero;
