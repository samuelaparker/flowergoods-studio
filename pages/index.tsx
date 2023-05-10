import Image from "next/image";
import { Inter } from "next/font/google";
import Video from "../components/Video";
import Layout from "../components/shared/Layout";
import Heading from "../components/Heading";
import StudioName from "@/components/StudioName";
import By from "@/components/StudioName";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "#64cd85";
  }, []);

  return (
    <div className="h-screen">
      <Layout pageTitle="Home Page">
        <div>
          <Heading />
          <div className="flex flex-col sm:pl-40">
            <By />
            <StudioName />
          </div>
        </div>
        <div className="my-8">
          <Video src="/fg-vid-1.mp4" />
        </div>
        {/* <div>
          <div
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
          ></div>
        </div> */}
      </Layout>
    </div>
  );
}
