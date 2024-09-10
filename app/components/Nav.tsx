"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/app/components/Logo";
import Image from "next/image";
import metalFlower from "@/public/metal-flower.webp";
import viewWork from "@/public/view-work.png";
import instagramRed from "@/public/instagram-red.png";
import instagramPurple from "@/public/instagram-purple.png";
import instagramBlue from "@/public/instagram-blue.png";
import squiggle from "@/public/metal-squiggle.webp";
import HamburgetMenuClose from "@/public/Icons/hamburger-lg.svg";
import HamburgetMenuOpen from "@/public/Icons/close-fill.svg";

interface Props {}

const SidebarNav: React.FC<Props> = () => {
  const subject = "";
  const body = "";

  const [navOpen, setNavOpen] = useState(false);

  const currentPathname = usePathname();
  let home = false;
  let about = false;
  let work = false;

  switch (currentPathname) {
    case "/":
      home = true;
      break;
    case "/about":
      about = true;
      break;
    case "/work":
      work = true;
      break;
  }

  let navLinkStyle = "";

  if (currentPathname === "/") {
    navLinkStyle = `hover:text-brand-blue transition duration-300 ease-in-out
      ${navOpen ? "md:text-inherit text-gray-800 text-2xl" : ""}`;
  } else if (currentPathname === "/about") {
    navLinkStyle = `hover:text-brand-red transition duration-300 ease-in-out
      ${navOpen ? "md:text-inherit text-gray-800 text-2xl" : ""}`;
  } else {
    navLinkStyle = `transition duration-300 ease-in-out
      ${navOpen ? "md:text-inherit text-gray-800 text-2xl" : ""}`;
  }

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  const navContainerStyle = `
    ${navOpen ? "flex" : "hidden"}
    md:flex flex-col md:flex-row
    fixed md:relative top-0 left-0 right-0
    bg-brand-blue md:bg-transparent
    h-screen md:h-auto
    items-center justify-center
    md:mt-6 mt-0 lg:w-[57%] w-full
    m-auto md:justify-between md:text-xl text-base font-normal
    z-20
  `;

  return (
    <nav className="sm:px-2 md:pt-5 pt-2 relative">
      <div
        className={`absolute md:top-6 md:right-12 ${
          navOpen ? "top-24" : "top-[100%]"
        } left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 z-30`}
      >
        <div className="m-auto md:w-28 md:h-28 w-16 h-16 animate-spin [animation-play-state:paused] hover:[animation-play-state:running] ">
          <Link href={"/work"}>
            <Image src={viewWork} alt="metal flower decoration" />
          </Link>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="sm:w-20 w-16 group absolute sm:left-14 sm:top-8 left-2 top-2">
          <a
            href={"https://www.instagram.com/flowergoods.studio/"}
            target="_blank"
            rel="noreferrer noopener"
            key="instagram"
          >
            {home && (
              <Image
                src={instagramBlue}
                alt="instagram icon"
                className="hover:scale-125 transition duration-700 ease-in-out"
              />
            )}
            {about && (
              <Image
                src={instagramRed}
                alt="instagram icon"
                className="hover:scale-125 transition duration-700 ease-in-out"
              />
            )}
            {work && (
              <Image
                src={instagramPurple}
                alt="instagram icon"
                className="hover:scale-125 transition duration-700 ease-in-out"
              />
            )}
          </a>
          <div className="font-thin md:absolute hidden top-12 left-12 opacity-0 w-28 group-hover:opacity-100  duration-700 ease-in-out ">
            follow us on ig
          </div>
        </div>
        <div className="w-full md:mt-0 mt-2">
          <div className="relative group w-1/2 m-auto">
            <Logo />
          </div>
        </div>
      </div>
      {/* Nav Links */}

      <div className="flex justify-end md:hidden absolute top-4 right-4 z-30">
        <button onClick={toggleNavbar} className="p-2">
          <Image
            src={navOpen ? HamburgetMenuOpen : HamburgetMenuClose}
            alt={navOpen ? "Close menu" : "Open menu"}
            width={30}
            height={30}
          />
        </button>
      </div>
      <div className={navContainerStyle}>
        <div className="flex flex-col items-center w-full space-y-8 md:space-y-0 md:flex-row md:justify-between">
          <div className="flex flex-col items-center">
            <Link href={"/"} key="Home" className={navLinkStyle}>
              home
            </Link>
            {home && (
              <div className="rotate-90 md:w-10 w-6 md:m-[-25px] m-[-20px]">
                <Image src={squiggle} alt="link underline" />
              </div>
            )}
          </div>
          <div className="flex flex-col items-center">
            <Link href={"/about"} key="About" className={navLinkStyle}>
              about
            </Link>
            {about && (
              <div className="rotate-90 md:w-10 w-8 m-[-25px]">
                <Image src={squiggle} alt="link underline" />
              </div>
            )}
          </div>
          <div className="flex flex-col items-center">
            <a
              href={"https://shop.flowergoods.studio/pages/inquire"}
              key="shop-slow"
              rel="noreferrer noopener"
              target="_blank"
              className={navLinkStyle}
            >
              inquire
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a
              href={"https://shop.flowergoods.studio/pages/faq"}
              key="faq"
              rel="noreferrer noopener"
              target="_blank"
              className={navLinkStyle}
            >
              faq
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a
              href={"https://shop.flowergoods.studio/collections/shop-slow"}
              key="order flowers"
              rel="noreferrer noopener"
              target="_blank"
              className={navLinkStyle}
            >
              shop merch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SidebarNav;
