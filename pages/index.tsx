import Image from "next/image";
import { Inter } from "next/font/google";
import Video from "../components/Video";
import Layout from "../components/shared/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen">
      <Layout bgColor="brand-green" pageTitle="Home Page">
        <div>
          <h1 className="my-8 text-7xl font-light text-right">
            saturday flowers
          </h1>
          <div className="flex flex-col h-8">
            <div className="text-base font-thin">by</div>
            <div className="text-2xl font-medium">flowergoods.studio</div>
          </div>
        </div>
        <Video src="/fg-vid-1.mp4" />
        <div>
          <div
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
          ></div>
        </div>
      </Layout>
    </div>
  );
}
