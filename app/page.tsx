"use client";
// import { Metadata } from "next";

import Image from "next/image";
import sendFlowersMetal from "@/public/metal-send-flowers.webp";
import flowersStimulate from "@/public/flowers-stimulate.png";
import dopamine from "@/public/dopamine.png";
import serotonin from "@/public/serotonin.png";
import oxytocin from "@/public/oxytocin.png";

// export const metadata: Metadata = {
//   title: "Flowergoods Studio",
//   description: "Flowergoods Studio",
//   verification: {
//     google: "google",
//     yandex: "yandex",
//     yahoo: "yahoo",
//     other: {
//       me: ["my-email", "my-link"],
//     },
//   },
// };

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
        <div className="lg:block hidden items-center w-[30rem] absolute bottom-[-100px] right-[-60px] opacity-0 hover:opacity-100 duration-700 ease-in-out">
          <Image src={oxytocin} alt="oxytocin" />
        </div>
        <div className="mt-[20svh] md:mt-4">
          <div className="">
            <div className="m-auto transition duration-700 ease-in-out">
              <a href="https://shop.flowergoods.studio/collections/sendflowers">
                <div className=" md:max-w-3xl w-3/4 m-auto">
                  <Image src={sendFlowersMetal} alt="send flowers metal" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
