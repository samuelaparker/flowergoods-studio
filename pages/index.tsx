import Image from "next/image";
import { Inter } from "next/font/google";
import Video from "../components/Video";
import Layout from "../components/shared/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" h-screen">
      <Layout bgColor="brand-green" pageTitle="Home Page">
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
