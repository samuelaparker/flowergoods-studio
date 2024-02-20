"use client";
import Image from "next/image";
import Draggable from "react-draggable";

import metalImage from "@/public/metal-image.png";
import flowerIllustration from "@/public/flower-illustration.webp";
import trishy from "@/public/flowergoods-studio-making-an-arrangement.png";

const About: React.FC = () => {
  return (
    <>
      <div className="absolute bottom-[210px] right-[60%] max-w-[600px] z-10 xl:block hidden">
        <Image src={flowerIllustration} alt="flower illustration" />
      </div>
      <div className="container m-auto relative">
        <div className="m-auto">
          <div className="flex md:max-w-[1000px] mx-auto md:min-h-[500px] md:flex-row flex-col-reverse">
            <div className="pr-2 pt-4 md:w-1/2 w-full">
              <Image
                src={trishy}
                alt="flowergoods studio making an arrangement"
              />
            </div>
            <div className="flex flex-col justify-between md:max-w-[50%] w-full">
              <h1 className="text-2xl font-bold text-center font-display text-brand-green">
                Founded by Trish Ramirez-Parker
              </h1>
              <div className="relative">
                <div className="hidden md:block ">
                  <Image src={metalImage} alt="metal image" />
                </div>
                <Draggable>
                  <div
                    style={{
                      height: "180px",
                      width: "120px",
                      backgroundImage: `url("../../draggable-flower.webp")`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      position: "absolute",
                      left: "0",
                      top: "0",
                    }}
                  ></div>
                </Draggable>
              </div>
              <p className="font-thin text-xl">
                We believe that flowers should be accessible and enjoyed by all.
                Flowers are known to stimulate &quot;happy&quot; chemicals like
                dopamine, oxytocin and serotonin in our brains.
              </p>
              <p className="font-thin text-xl">
                Flowergoods studio is a Richmond, Virginia based studio.
                We&apos;re all about bringing a touch of beauty +{" "}
                <span className="text-brand-green font-bold">
                  happy brain chemicals
                </span>
                to your life through florals and goods.
              </p>
            </div>
          </div>

          <div className="flex flex-col mx-auto pb-24 font-thin text-xl md:max-w-[1000px]">
            <p className="mt-4">
              Our signature concept,
              <span className="text-brand-green font-bold">
                saturday flowers
              </span>
              , is inspired by our personal practice of rest + stillness. Every
              week, we deliver fresh flowers to your doorstep, so you can enjoy
              a slow Saturday.
            </p>
            <p className="mt-4">
              We also offer floral arrangements + design for all kinds of
              occasions, from intimate gatherings to floral installs for large
              events.
            </p>
            <p className="mt-4">
              Thanks for stopping by and checking us out. Get{" "}
              <a
                href="mailto: hello@flowergoods.studio"
                className="text-brand-green font-bold"
              >
                in touch
              </a>{" "}
              if you&apos;d like to work together or send flowers.
            </p>
            <div className="md:hidden block ">
              <Image src={metalImage} alt="metal image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
