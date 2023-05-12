import React, { FC } from "react";

interface Props {
  src: string;
}

//to do before hosting add: "autoPlay loop" attributes to video element

const Video: FC<Props> = ({ src }) => {
  console.log("SRC: ", src);
  return (
    <div className="relative pb-9/16">
      <video className="" controls muted autoPlay loop>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
