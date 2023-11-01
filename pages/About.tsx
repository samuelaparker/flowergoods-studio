import React, { useState, useEffect } from "react";
import Layout from "@/components/shared/Layout";
import Image from "next/image";
import Link from "next/link";

import { BsInstagram } from "react-icons/bs";

const About: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#F5F5DC";
  }, []);

  const subject = "";
  const body = "";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = `mailto:hello@flowergoods.studio?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Layout pageTitle="About">
      <div className="h-screen relative">
        <div className="mx-auto py-8 pl-20 pr-8 lg:px-8 ">
          <div className="lg:flex lg:flex-row-reverse">
            <div>
              <h1 className="lg:text-[80px] text-[50px] mb-4 font-extrabold text-right">
                about
              </h1>

              <Link
                href={"https://www.instagram.com/flowergoods.studio/"}
                target="_blank"
                rel="noreferrer noopener"
                key="instagram"
                className="hover:opacity-50  "
              >
                <BsInstagram className="h-10 w-10" />
              </Link>
            </div>

            <div className="text-lg lg:mt-32 mt-10 md:mr-10 lg:ml-56">
              <p>
                Flowergoods.studio was created by{" "}
                <span
                  className="hover:underline cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Trish Ramirez-Parker
                </span>
                . in 2023 after switching gears in her career in New York City.
                With her background in operations and the creative,
                flowergoods.studio came to be. Flowergoods.studio is now a
                Richmond, Virginia based studio. We&apos;re all about bringing a
                touch of beauty + happy brain chemicals to your life through
                florals and goods
              </p>
              {isHovered && (
                <div className="absolute left-[60%]">
                  <Image
                    src="/saturday-flowers-14.jpeg"
                    alt="Saturday Flowers Popup Image"
                    className="mt-4"
                    width={396}
                    height={596}
                    // fill={true}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              )}
              <p className="mt-4">
                Our signature concept,{" "}
                <span className="font-bold">saturday flowers</span>, is inspired
                by our personal practice of rest + stillness. Every Saturday, we
                deliver fresh flowers to your doorstep, so you can enjoy them
                over a cup of coffee and a pastry.
              </p>
              <p className="mt-4">
                We also offer floral arrangements + design for all kinds of
                occasions, from intimate gatherings to floral installs for large
                events
              </p>
              <p className="mt-4">
                Thanks for stopping by and checking us out. Get
                <span className="font-bold">
                  <Link
                    href="#"
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={handleClick}
                    key="email"
                    className="hover:opacity-50"
                  >
                    {" in touch "}
                  </Link>
                </span>
                if you&apos;d like to work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
