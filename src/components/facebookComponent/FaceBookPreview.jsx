import React from 'react';

const FacebookPreview = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Video Preview</h2>

      {/* Native Video Preview */}
      <div className="w-full rounded-lg overflow-hidden shadow-lg">
        <video
          className="w-full h-auto"
          controls
          poster="/thumbnail.jpg" // Optional: a preview image before playback
        >
          <source src="/path-to-downloaded-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default FacebookPreview;
