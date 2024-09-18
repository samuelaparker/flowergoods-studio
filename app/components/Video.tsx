"use client";
import React, { FC, useEffect, useRef, useState } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  src: string;
  loop: boolean;
}

const Video: FC<Props> = ({ src, loop }) => {
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
    <div>
      <div className="relative pb-9/16">
        <video
          ref={videoRef}
          onLoadedData={handleLoadedData}
          loop={loop}
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
