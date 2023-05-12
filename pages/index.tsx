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
      {/* SMALLER THAN DESKTOP*/}
      <div className="lg:hidden">
        <Heading className="my-8 sm:text-7xl text-4xl font-light text-right" />
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

      {/* DESKTOP >1024px*/}
      <div className="flex-row hidden lg:flex ">
        <div>
          <div className="flex flex-row items-center mt-40 pr-20">
            <By className="font-thin text-3xl pr-10" />
            <Video src="/fg-vid-1.mp4" />
          </div>
          <StudioName className="pt-20 text-4xl font-bold" />
        </div>
        <div className="border-l-[1px] border-black mt-20 pl-20">
          <Heading className="text-8xl text-center" />
          <div className="mt-14">
            <Video src="/fg-vid-2.mp4" />
          </div>
          <NewYork className="pt-10 font-light text-2xl text-center" />
        </div>
      </div>
    </Layout>
  );
}
