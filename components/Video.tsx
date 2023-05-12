import React, { FC, useState } from "react";

interface Props {
  src: string;
}

const Video: FC<Props> = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative pb-9/16">
      {isLoading && <div className="loading-screen">Video Loading...</div>}
      <video
        className={isLoading ? "hidden" : ""}
        controls
        muted
        autoPlay
        loop
        onLoadedData={handleLoadedData}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
