import React, { FC, useEffect, useRef, useState } from "react";

interface Props {
  src: string;
}

const Video: FC<Props> = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleLoadedData = () => {
    //TEST OF SUSPENSE BOUNDARY
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative pb-9/16">
      {/* {isLoading && <div className="loading-screen">Video Loading...</div>} */}
      <video
        ref={videoRef}
        className={isLoading ? "hidden" : ""}
        onLoadedData={handleLoadedData}
        loop
        autoPlay
        muted
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
