"use client";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import { Shrikhand } from "next/font/google";
import Nav from "./components/Nav";
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
      "w-full min-h-[100svh] bg-cover bg-no-repeat overflow-hidden bg-overlay-blue bg-opacity-75";
    body =
      "min-h-[100svh] bg-desktop bg-cover bg-no-repeat relative tracking-widest overflow-hidden";
  } else if (currentPathname === "/about") {
    background =
      "w-full min-h-[100svh] bg-no-repeat overflow-hidden bg-overlay-brown bg-opacity-75";
    body =
      "min-h-[100svh] bg-desktop bg-cover bg-no-repeat relative tracking-widest";
  }

  return (
    <html lang="en" className={`${montserrat.variable} ${shrikhand.variable}`}>
      <meta
        name="facebook-domain-verification"
        content="vmz20p53g8bsodl9kle05xneb53j8t"
      />
      <Script />
      <body className={body}>
        <div className={background}>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
