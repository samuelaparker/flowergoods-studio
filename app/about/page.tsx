"use client";
import Link from "next/link";
import Image from "next/image";
import Draggable from "react-draggable";

import metalImage from "@/public/metal-image.png";
import flowerIllustration from "@/public/flower-illustration.webp";
import trishy from "@/public/flowergoods-studio-making-an-arrangement.png";

const About: React.FC = () => {
  return (
    <>
      <div className="absolute bottom-[257px] right-[60%] max-w-[600px] z-10 xl:block hidden">
        <Image src={flowerIllustration} alt="flower illustration" />
      </div>
      <div className="container relative m-auto md:mt-28 mt-4 md:px-0 px-2">
        <div className="m-auto">
          <div className="flex md:max-w-[1000px] mx-auto md:min-h-[500px] md:flex-row flex-col-reverse">
            <div className="pr-2 pt-4 md:w-1/2 w-full">
              <Image
                src={trishy}
                alt="flowergoods studio making an arrangement"
              />
            </div>
            <div className="flex flex-col justify-between md:max-w-[50%] w-full">
              <h1 className="md:m-0 m-auto md:max-w-none max-w-[15rem] text-2xl font-bold text-center font-display text-brand-green ">
                Founded by Trish Ramirez
              </h1>
              <div className="relative">
                <div className="hidden md:block  ">
                  <Image src={metalImage} alt="metal image" />
                </div>
                <div className="absolute left-[35%] top-[10%] hidden md:block ">
                  <Draggable>
                    <div
                      style={{
                        height: "180px",
                        width: "120px",
                        backgroundImage: `url("../../draggable-flower.webp")`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </Draggable>
                </div>
              </div>
              <p className="font-thin text-lg">
                We are a Richmond, Virginia based studio and believe flowers
                should be accessible and enjoyed by all.
              </p>
              <p className="font-thin text-lg">
                Flowers are known to stimulate &quot;happy&quot; chemicals like
                dopamine, oxytocin and serotonin in our brains. We&apos;re all
                about bringing a touch of beauty +{" "}
                <span className="text-brand-green font-bold">
                  happy brain chemicals{" "}
                </span>
                to your life through florals and design.
              </p>
            </div>
          </div>

          <div className="flex flex-col mx-auto pb-24 font-thin text-lg md:max-w-[1000px]">
            <p className="mt-4">
              Our signature concept,
              <span className="text-brand-green font-bold">
                {" "}
                saturday flowers
              </span>
              , is inspired by our personal practice of rest + stillness. Every
              week, we deliver fresh flowers to your doorstep, so you can enjoy
              a slow Saturday. We also offer other services, from custom
              arrangements to installations, and more.
            </p>

            <p className="mt-4">
              We look forward to bringing a little extra happiness to your life
              with our flowers and services! Get{" "}
              <a
                href="https://shop.flowergoods.studio/pages/inquire"
                className="text-brand-green font-bold"
              >
                in touch
              </a>{" "}
              if you&apos;d like to work together or send flowers.
            </p>
            <div className="relative">
              <div className="md:hidden block ">
                <Image src={metalImage} alt="metal image" />
              </div>
              <div className="absolute left-[35%] top-0 md:hidden block ">
                <Draggable>
                  <div
                    style={{
                      height: "180px",
                      width: "120px",
                      backgroundImage: `url("../../draggable-flower.webp")`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </Draggable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
