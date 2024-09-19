"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import { Shrikhand } from "next/font/google";
import silverSaturdayFlowers from "@/public/saturday-flowers-silver.webp";
import splashLilyPads from "@/public/splash-image-lilypads.webp";
import Nav from "./components/Nav";
import Video from "./components/Video";
import Script from "next/script";
import "../styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const shrikhand = Shrikhand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shrikhand",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPathname = usePathname();
  let backgroundClass = "";
  let bodyClass =
    "min-h-screen bg-desktop bg-cover bg-fixed relative tracking-widest font-sans";

  if (currentPathname === "/") {
    backgroundClass = "bg-overlay-green";
  } else if (currentPathname === "/about") {
    backgroundClass = "bg-overlay-blue";
  } else if (currentPathname === "/work") {
    backgroundClass = "bg-overlay-brown";
  }

  const [showSplashPage, setShowSplashPage] = useState(true);
  const [opacity, setOpacity] = useState(1); // Add this state for opacity

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => setOpacity(0), 4500); // Start fade-out after 4.5 seconds
    const removeSplashPageTimeout = setTimeout(
      () => setShowSplashPage(false),
      5000
    ); // Remove splash page after 5 seconds

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(removeSplashPageTimeout);
    };
  }, []);

  return (
    <html lang="en" className={`${montserrat.variable} ${shrikhand.variable}`}>
      <GoogleTagManager gtmId="GTM-WPSLN7X" />
      <meta
        name="facebook-domain-verification"
        content="vmz20p53g8bsodl9kle05xneb53j8t"
      />
      <Script />
      <body className={bodyClass}>
        {showSplashPage && (
          <div
            className="absolute top-0 left-0 z-[999] h-full w-full bg-splash-blue transition-opacity ease-in-out duration-700"
            style={{ opacity }} // Apply the opacity state
          >
            <div className="relative min-h-screen flex">
              <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/5 sm:min-w-[40%] min-w-full">
                <Image
                  src={silverSaturdayFlowers}
                  alt="Silver Saturday Flowers Logo"
                />
              </div>
              <div className="w-[60%] flex justify-center items-center">
                <div className="sm:w-1/2 w-2/3 mt-20">
                  <Video src="/splash-video.MOV" loop={true} />
                </div>
              </div>
              <div className="w-[48%]">
                <div className="relative overflow-hidden min-w-full min-h-screen">
                  <Image
                    src={splashLilyPads}
                    alt="decorative image"
                    style={{ objectFit: "cover" }}
                    fill={true}
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          className={`w-full min-h-screen bg-cover bg-center bg-fixed overflow-x-hidden ${backgroundClass} bg-opacity-75`}
        >
          <div className="max-w-[1500px] m-auto">
            <Nav />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
