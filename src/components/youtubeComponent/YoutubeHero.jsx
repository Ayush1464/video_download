
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const YoutubeHero = () => {
   const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [videoURL, setVideoURL] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedResolution, setSelectedResolution] = useState("");
  const [isDownloading, setIsDownloading] = useState(false); // New state
  const [downloadingRes, setDownloadingRes] = useState(null);

  const handleSearch = async () => {
    if (!videoURL.trim()) {
      toast.error("Please enter a YouTube video URL");
      return;
    }
    const youtubeRegex =  /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    if(!youtubeRegex.test(videoURL)) {
      toast.error("Please enter a valid YouTube video URL");
      return;
    }
    setLoading(true);
    setVideoData(null);
    setSelectedResolution("");

    try {
      const response = await fetch(
        `${backendUrl}/api/video/extract-metadata/`,
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

  
  const handleDownloadFor = async (resolution) => {
      setDownloadingRes(resolution); // mark this resolution as downloading
      try {
        const downloadResponse = await fetch(
          `${backendUrl}/api/video/download/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: videoURL, resolution }),
          }
        );
  
        if (!downloadResponse.ok) {
          throw new Error("Failed to initiate download");
        }
  
        const blob = await downloadResponse.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = `${videoData.title || "video"}_${resolution}.mp4`;
        document.body.appendChild(a);
        a.click();
        a.remove();
  
        toast.success(`Video (${resolution}) downloaded successfully!`);
        setVideoURL(""); // Clear input after download
        setVideoData(null); // Clear video data after download
      } catch (error) {
        console.error("Download error:", error);
        toast.error("Download failed.");
      } finally {
        setDownloadingRes(null); // reset after download
      }
    };

  return (
    <div className="w-full text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Download YouTube Videos Instantly
      </h1>
      <p className="text-lg mb-8 text-gray-600">
        Paste the YouTube video link below to download in seconds.
      </p>

      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Enter YouTube video URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="w-full md:w-auto px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

       {videoData && (
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg ">
            {/* Left: Thumbnail + Info */}
            <div className="md:w-1/2  flex flex-col items-center justify-center p-5">
              <img
                src={videoData.thumbnail}
                alt={videoData.title}
                className="w-full rounded-lg shadow-md mb-3"
              />
              <p className="text-gray-800 font-semibold text-center text-sm  w-full">
                {videoData.title}
              </p>
            </div>

            {/* Right: Resolution Options */}
            <div className="md:w-1/2 p-5 space-y-3">
              <h1 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 inline-block pb-1">
                Available Resolutions
              </h1>

              {videoData.available_resolutions.map((res) => (
                <div
                  key={res}
                  className="flex items-center justify-between px-4 py-3 rounded-md bg-[#1a1a3d]/60 border border-[#2a2a6e]/50 hover:bg-[#222260]/70 transition"
                >
                  <span className="text-gray-200 font-medium">{res}.mp4</span>
                  <button
                    onClick={() => handleDownloadFor(res)}
                    disabled={downloadingRes === res}
                    className={`px-5 py-2 rounded-md font-semibold text-sm shadow transition-transform transform ${
                      downloadingRes === res
                        ? "bg-gray-500 cursor-wait text-white scale-95"
                        : "bg-red-500 hover:bg-red-600 active:scale-95 text-white"
                    }`}
                  >
                    {downloadingRes === res ? "Downloading..." : "Download"}
                  </button>
                </div>
              ))}
              <p className="mt-4 text-xs text-gray-600 text-center">
                <span className="text-red-500 font-bold">*</span> By
                downloading, I accept the
                <Link
                  to="/terms"
                  className="text-blue-600 underline hover:text-blue-800 ml-1"
                >
                  terms and conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YoutubeHero;
