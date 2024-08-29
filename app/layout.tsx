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
  let background = "";
  let body = "";
  if (currentPathname === "/") {
    background =
      "w-full min-h-[100svh] bg-cover bg-no-repeat overflow-hidden bg-overlay-brown bg-opacity-75";
    body =
      "min-h-[100svh] bg-desktop bg-cover bg-no-repeat relative tracking-widest overflow-hidden cursor-fancy font-sans";
  } else if (currentPathname === "/about") {
    background =
      "w-full min-h-[100svh] bg-no-repeat overflow-hidden bg-overlay-purple bg-opacity-75";
    body =
      "min-h-[100svh] bg-desktop bg-cover bg-no-repeat relative tracking-widest  cursor-fancy font-sans leading-3";
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
      <meta
        name="facebook-domain-verification"
        content="vmz20p53g8bsodl9kle05xneb53j8t"
      />
      <Script />
      <body className={body}>
        {showSplashPage && (
          <div
            className="absolute top-0 left-0 z-[999] h-screen w-screen bg-splash-blue transition-opacity ease-in-out duration-700"
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
                <div className="sm:w-1/2 w-full">
                  <Video src="/splash-video.MOV" />
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
        <div className={background}>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
