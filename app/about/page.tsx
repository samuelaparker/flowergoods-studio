"use client";

import Image from "next/image";
import Draggable from "react-draggable";

import metalImage from "@/public/metal-image.png";
import flowerIllustration from "@/public/flower-illustration.webp";
import trishy from "@/public/flowergoods-studio-making-an-arrangement.png";

const About: React.FC = () => {
  return (
    <>
      <div className="absolute top-[77px] right-[60%] max-w-[600px] z-10 xl:block hidden">
        <Image src={flowerIllustration} alt="flower illustration" />
      </div>
      <div className="container relative m-auto md:mt-12 mt-4 md:px-0 px-2">
        <div className="m-auto">
          <div className="flex md:max-w-[1000px] mx-auto md:flex-row flex-col-reverse">
            <div className="sm:pr-2 md:w-2/5 w-full sm:mt-0 mt-4">
              <Image
                src={trishy}
                alt="flowergoods studio making an arrangement"
              />
            </div>
            <div className="flex flex-col items-start md:w-3/5 w-full md:mt-0 mt-8">
              <h1 className="m-auto sm:text-2xl text-xl font-bold text-center font-display text-brand-yellow md:max-w-[unset] max-w-[300px]">
                founded by Trish Ramirez-Parker
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
              <p className="text-lg leading-none font-light md:mt-0 mt-4">
                saturday flowers is a Richmond-based floral design studio.
                Inspired by a personal commitment to stillness and rest,
                saturday flowers offers weekly Friday delivery so you can fully
                embrace a slow and peaceful Saturday. We also offer a multitude
                of other services, from brand installs to intimate gatherings.
              </p>
            </div>
          </div>

          <div className="flex flex-col mx-auto pb-6 text-lg md:max-w-[1000px] leading-none font-light">
            <p className="mt-4">
              We specialize in crafting wild, colorful, and textural floral
              arrangements that blend the best of classic and modern styles. Our
              passion for flowers goes beyond aesthetics; we know they can
              actually boost your mood by stimulating those{" "}
              <span className="text-brand-yellow font-bold">
                happy brain chemicals{" "}
              </span>
              —serotonin, dopamine, and oxytocin—bringing joy and a sense of
              well-being to your space or event. Our work thrives on creativity
              and experimentation, ensuring that no two arrangements are ever
              the same.
            </p>

            <p className="mt-4">
              Take a look around and{" "}
              <a
                href="https://shop.flowergoods.studio/pages/inquire"
                className="text-brand-yellow font-bold"
              >
                get in touch
              </a>{" "}
              —we&apos;d love to work with you!
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
