import Image from "next/image";
import { Inter } from "next/font/google";
import Video from "../components/Video";
import Layout from "../components/shared/Layout";
import Heading from "../components/Heading";
import StudioName from "@/components/StudioName";
import By from "@/components/By";
import NewYork from "@/components/NewYork";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "#64cd85";
  }, []);

  return (
    <Layout pageTitle="Home Page">
      <div className="">
        <Heading />
        <div>
          <div className="flex flex-col items-center">
            <div>
              <By className="font-thin text-base pb-20" />
              <StudioName className="text-base font-medium sm:text-2xl" />
            </div>
          </div>
        </div>
        <div className="my-4">
          <Video src="/fg-vid-1.mp4" />
        </div>
        <div className="flex flex-col items-center py-4">
          <NewYork className="text-base font-thin pb-20" />
        </div>
      </div>

      {/* DESKTOP*/}
      <div className="flex flex-row">
        <div>
          <div className="flex flex-row items-center">
            <By className="font-thin" />
            <Video src="/fg-vid-1.mp4" />
          </div>
          <StudioName />
        </div>
        <div className="border-l-2 border-black">
          <Heading />
          <Video src="/fg-vid-2.mp4" />
          <NewYork />
        </div>
      </div>
    </Layout>
  );
}
