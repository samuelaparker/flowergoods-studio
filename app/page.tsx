import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import blueFlower from "@/public/blue-flower.webp";
import redFlower from "@/public/red-flower.webp";
import greenFlower from "@/public/green-flower.webp";
import purpleFlower from "@/public/purple-flower.webp";
import brownFlower from "@/public/brown-flower.webp";
import metalFlower from "@/public/metal-flower.webp";

export const metadata: Metadata = {
  title: "Flowergoods Studio",
  description: "Flowergoods Studio",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
};

const Home = () => {
  return (
    <>
      <div className="relative text-2xl font-thin max-w-screen-xl mx-auto my-20">
        <div className="w-36 absolute left-0 top-0 md:flex hidden items-end opacity-0 hover:opacity-100 duration-700 ease-in-out">
          <Image src={redFlower} alt="red flower decoration" />
          <div className="mx-[-20px]">flowers!</div>
        </div>
        <div className="md:flex hidden items-center w-36 absolute top-0 right-0 opacity-0 hover:opacity-100 duration-700 ease-in-out">
          <div className="[text-wrap:nowrap] pt-4 mr-[-8px]">
            special events
          </div>
          <Image src={greenFlower} alt="green flower decoration" />
        </div>
        <div className="w-36 absolute bottom-0 left-0 md:flex hidden items-end opacity-0 hover:opacity-100 duration-700 ease-in-out">
          <Image src={purpleFlower} alt="purple flower decoration" />
          <div className="[text-wrap:nowrap]">merch u want to wear!</div>
        </div>
        <div className="md:flex hidden items-center w-52 absolute bottom-0 right-0 opacity-0 hover:opacity-100 duration-700 ease-in-out">
          <div>
            <div className="[text-wrap:nowrap] pt-4 mr-[-6px]">coming soon</div>
            <div className="text-center">*vases*</div>
          </div>
          <Image src={blueFlower} alt="blue flower decoration" />
        </div>
        <div className="container mx-auto flex">
          <div className="m-auto flex flex-col items-center">
            <div className=" m-auto md:mt-32 mt-12 group font-display text-7xl tracking-wide text-center text-brand-green hover:text-brand-purple transition duration-700 ease-in-out">
              <Link
                href="https://flowergoodstudio.myshopify.com/collections/sendflowers"
                prefetch={true}
              >
                <div className="">send</div>
                <div className="mt-2">flowers</div>
              </Link>
            </div>
            <div className="w-12 my-4 hover:animate-scale">
              <div className="sm:block hidden">
                <Image src={brownFlower} alt="brown flower decoration" />
              </div>
              <div className="sm:hidden block w-14 h-14">
                <Image src={metalFlower} alt="metal flower decoration" />
              </div>
            </div>
            <div className="text-2xl font-light hover:text-brand-brown transition duration-700 ease-in-out ">
              richmond
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
