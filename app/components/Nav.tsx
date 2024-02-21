"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/app/components/Logo";
import Image from "next/image";
import metalFlower from "@/public/metal-flower.webp";
import instagram from "@/public/instagram-icon.webp";
import squiggle from "@/public/metal-squiggle.webp";

interface Props {}

const SidebarNav: React.FC<Props> = () => {
  const subject = "";
  const body = "";

  const currentPathname = usePathname();
  let home = false;
  let about = false;

  switch (currentPathname) {
    case "/":
      home = true;
      break;
    case "/about":
      about = true;
      break;
  }

  return (
    <nav className="px-2 md:pt-10 pt-2 relative">
      <div className="flex justify-between">
        <div className="md:w-12 w-8 group absolute md:left-5 top-6 ">
          <a
            href={"https://www.instagram.com/flowergoods.studio/"}
            target="_blank"
            rel="noreferrer noopener"
            key="instagram"
          >
            <Image
              src={instagram}
              alt="instagram icon"
              className="hover:scale-125 transition duration-700 ease-in-out"
            />
          </a>
          <div className="font-thin absolute top-12 left-12 opacity-0 w-28 group-hover:opacity-100  duration-700 ease-in-out">
            follow us on ig
          </div>
        </div>
        <div className="w-full md:mt-0 mt-4">
          <div className="relative group md:max-w-sm max-w-[270px] m-auto ">
            <Logo />
            <div className="md:text-2xl text-xl font-thin md:absolute md:top-[-40px] md:right-[-150px] block text-right md:mr-0 mr-[-40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
              a floral design studio
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-4 w-28 h-28 md:block hidden  animate-spin [animation-play-state:paused] hover:[animation-play-state:running] ">
          <Image src={metalFlower} alt="metal flower decoration" />
        </div>
      </div>
      {/* Nav Links */}
      <div className="relative md:mt-6 mt-2 md:w-[57%] w-[87%] m-auto flex justify-between md:text-xl text-base font-extralight z-20">
        <div className="flex flex-col items-center">
          <Link
            href={"/"}
            key="Home"
            className="hover:text-brand-red transition duration-300 ease-in-out"
          >
            home
          </Link>
          {home && (
            <div className="rotate-90 md:w-10 w-8  m-[-25px]">
              <Image src={squiggle} alt="link underline" />
            </div>
          )}
        </div>
        <div className="flex flex-col items-center">
          <Link
            href={"/about"}
            key="About"
            className="hover:text-brand-red transition duration-300 ease-in-out"
          >
            about
          </Link>
          {about && (
            <div className="rotate-90 md:w-10 w-8   m-[-25px]">
              <Image src={squiggle} alt="link underline" />
            </div>
          )}
        </div>
        <div className="flex flex-col items-center">
          <Link
            href={
              "https://flowergoodstudio.myshopify.com/collections/shop-slow"
            }
            key="shop-slow"
            rel="noreferrer noopener"
            target="_blank"
            className="hover:text-brand-red transition duration-300 ease-in-out"
          >
            merch
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <Link
            href={
              "https://flowergoodstudio.myshopify.com/products/saturday-flowers"
            }
            key="order flowers"
            rel="noreferrer noopener"
            target="_blank"
            className="hover:text-brand-red transition duration-300 ease-in-out"
          >
            send flowers
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SidebarNav;
