import Image from "next/image";
import { Inter } from "next/font/google";
import Video from "../components/Video";
import Layout from "../components/shared/Layout";
import Heading from "../components/Heading";
import StudioName from "@/components/StudioName";
import By from "@/components/By";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "#64cd85";
  }, []);

  return (
    <Layout pageTitle="Home Page">
      <div>
        <Heading />
        <div className="flex flex-col items-center">
          <div>
            <By />
            <StudioName />
          </div>
        </div>
      </div>
      <div className="my-4">
        <Video src="/fg-vid-1.mp4" />
      </div>
    </Layout>
  );
}
