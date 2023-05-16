import React, { useState, useEffect } from "react";
import Layout from "@/components/shared/Layout";
import Image from "next/image";

const About: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#ba5a87";
  }, []);

  return (
    <Layout pageTitle="About">
      <div className="h-screen relative">
        <div className="mx-auto py-8 px-8 sm:px-6 lg:px-8 ">
          <div className="lg:flex lg:flex-row-reverse">
            <h1 className="lg:text-[80px] text-[50px] mb-4 font-extrabold text-right">
              about
            </h1>

            <div className="text-lg lg:mt-32 mt-10 md:mr-10 lg:ml-56">
              <p>
                Hey there, welcome to flowergoods.studio! flowergoods.studio is
                run by{" "}
                <span
                  className="hover:underline cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Trish Ramirez-Parker
                </span>
                . We&apos;re all about bringing a touch of beauty + happy brain
                chemicals to your life through florals and floral goods.
              </p>
              {isHovered && (
                <div className="absolute left-[60%]">
                  <Image
                    src="/popup-img.png"
                    alt="Medium Image"
                    className="mt-4"
                    width={396}
                    height={596}
                    // fill={true}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              )}
              <p className="mt-4">
                Our signature concept, saturday flowers, is inspired by our
                personal practice of rest + stillness. Every saturday, we
                deliver fresh blooms to your doorstep, so you can enjoy them
                over a cup of coffee or tea. It&apos;s a lovely way to add a
                touch of beauty to your weekend.
              </p>
              <p className="mt-4">
                We also offer one of a kind vases, floral arrangements + design
                for all kinds of occasions, from weddings to corporate events
                and everything in between.
              </p>
              <p className="mt-4">
                Thanks for stopping by and checking us out. We can&apos;t wait
                to help make your day a little brighter with some seriously
                amazing blooms!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
