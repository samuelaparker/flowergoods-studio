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
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
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
      "min-h-[100svh] bg-desktop bg-cover bg-no-repeat relative tracking-widest overflow-hidden cursor-fancy";
  } else if (currentPathname === "/about") {
    background =
      "w-full min-h-[100svh] bg-no-repeat overflow-hidden bg-overlay-purple bg-opacity-75";
    body =
      "min-h-[100svh] bg-desktop bg-cover bg-no-repeat relative tracking-widest  cursor-fancy";
  }

  const [showSplashPage, setShowSplashPage] = useState(true);

  useEffect(() => {
    let showSplashPageTimeout: NodeJS.Timeout | number;

    showSplashPageTimeout = setTimeout(() => setShowSplashPage(false), 3000);

    return () => {
      clearTimeout(showSplashPageTimeout);
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
          <div className="absolute top-0 left-0 z-[999] h-screen w-screen bg-splash-yellow">
            <div className="relative min-h-screen flex">
              <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={silverSaturdayFlowers}
                  alt="Silver Saturday Flowers Logo"
                  width={800}
                />
              </div>
              <div className="w-[50vw] flex justify-center items-center">
                <div className="w-[50%]">
                  <Video src="/splash-video.MOV" />
                </div>
              </div>
              <div className="w-[50%]">
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
