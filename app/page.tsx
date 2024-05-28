import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import blueFlower from "@/public/blue-flower.webp";
import redFlower from "@/public/red-flower.webp";
import greenFlower from "@/public/green-flower.webp";
import purpleFlower from "@/public/purple-flower.webp";
import brownFlower from "@/public/brown-flower.webp";
import metalFlower from "@/public/metal-flower.webp";
import sendFuzzyBlue from "@/public/send-flowers-fuzzy-blue.png";
import sendFuzzyGreen from "@/public/send-flowers-fuzzy-green.png";
import flowersStimulate from "@/public/flowers-stimulate.png";
import dopamine from "@/public/dopamine.png";
import serotonin from "@/public/serotonin.png";
import oxytocin from "@/public/oxytocin.png";

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
      <div className="relative text-2xl font-thin max-w-screen-2xl mx-auto my-20">
        <div className="w-96 absolute left-0 top-[-40px] hidden lg:block items-end opacity-0 hover:opacity-100 duration-700 ease-in-out">
          <Image
            src={flowersStimulate}
            alt="flowers stimulate happy brain chemicals"
          />
        </div>
        <div className="w-80 hidden items-center lg:block absolute top-[-40px] right-0 opacity-0 hover:opacity-100 duration-700 ease-in-out">
          <Image src={serotonin} alt="serotonin" />
        </div>
        <div className="w-72 absolute bottom-[-40px] left-0 lg:block hidden items-end opacity-0 hover:opacity-100 duration-700 ease-in-out">
          <Image src={dopamine} alt="dopamine" />
        </div>
        <div className="lg:block hidden items-center w-[30rem] absolute bottom-[-100px] right-0 opacity-0 hover:opacity-100 duration-700 ease-in-out">
          <Image src={oxytocin} alt="oxytocin" />
        </div>
        <div className="mt-[20svh] md:mt-8">
          <div className="">
            <div className="m-auto transition duration-700 ease-in-out">
              <a href="https://shop.flowergoods.studio/collections/sendflowers">
                <div className=" max-w-4xl relative m-auto">
                  <div className="absolute top-0 left-0 opacity-0 md:hover:opacity-100 transition-opacity duration-700 ease-in-out">
                    <Image src={sendFuzzyBlue} alt="send flowers blue" />
                  </div>
                  <div className="top-0 left-0">
                    <Image src={sendFuzzyGreen} alt="send flowers green" />
                  </div>
                </div>
              </a>
              <div className="">
                <div className="m-auto w-24 h-24 animate-spin [animation-play-state:paused] hover:[animation-play-state:running] ">
                  <Image src={metalFlower} alt="metal flower decoration" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
