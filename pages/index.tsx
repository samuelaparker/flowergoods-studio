import Image from "next/image";
import { Inter } from "next/font/google";
import Video from "../components/Video";
import Layout from "../components/shared/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <Video src="/fg-vid-1.mp4" />
      </main>
    </Layout>
  );
}
