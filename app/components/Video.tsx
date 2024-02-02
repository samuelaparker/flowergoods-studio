import React, { FC, useEffect, useRef, useState } from "react";
import Loading from "./shared/LoadingSpinner";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  src: string;
}

const Video: FC<Props> = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleLoadedData = () => {
    //TEST OF SUSPENSE BOUNDARY

    setIsLoading(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="">
      <div className="relative pb-9/16">
        {/* {isLoading && (
          <div className="min-h-[300px] flex items-center">
            <h1 className="">..Loading video</h1>
          </div>
        )} */}
        <video
          ref={videoRef}
          className={isLoading ? "invisible" : ""}
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
    </div>
  );
};

export default Video;
