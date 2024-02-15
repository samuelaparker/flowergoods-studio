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
  let home,
    about = false;

  switch (currentPathname) {
    case "/":
      home = true;
      break;
    case "/about":
      about = true;
      break;
  }

  return (
    <nav className="px-2 pt-10">
      <div className="flex justify-between">
        <div className="w-12 relative group">
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
          <div className="font-thin absolute bottom-8 left-8 w-28 opacity-0 group-hover:opacity-100  duration-700 ease-in-out">
            follow us on ig
          </div>
        </div>
        <div className="w-2/5">
          <div className="relative group max-w-sm m-auto">
            <Logo />
            <div className="text-2xl font-thin absolute top-[-40px] right-[-150px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
              a floral design studio
            </div>
          </div>
        </div>
        <div className=" w-28 h-28  animate-spin-slow [animation-play-state:paused] hover:[animation-play-state:running] ">
          <Image src={metalFlower} alt="metal flower decoration" />
        </div>
      </div>
      {/* Nav Links */}
      <div className="md:w-[70%] w-[100%] m-auto flex justify-between md:text-xl text-base font-extralight space-x-4">
        <div className="flex flex-col items-center">
          <Link
            href={"/"}
            key="Home"
            className="hover:text-brand-red transition duration-300 ease-in-out"
          >
            home
          </Link>
          {home && (
            <div className="rotate-90 w-10  m-[-25px]">
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
            <div className="rotate-90 w-10  m-[-25px]">
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
            shop merch
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
            order flowers
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SidebarNav;
