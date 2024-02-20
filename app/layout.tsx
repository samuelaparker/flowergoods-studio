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
  let background = " w-full min-h-[100svh] bg-overlay-blue bg-opacity-75";
  if (currentPathname === "/") {
    background = "w-full min-h-[100svh] bg-overlay-blue bg-opacity-75";
  } else if (currentPathname === "/about") {
    background = "w-full min-h-[100svh] bg-overlay-brown bg-opacity-75";
  }

  return (
    <html lang="en" className={`${montserrat.variable} ${shrikhand.variable}`}>
      <meta
        name="facebook-domain-verification"
        content="vmz20p53g8bsodl9kle05xneb53j8t"
      />
      <Script />
      <body className="min-h-[100svh] bg-desktop bg-cover bg-no-repeat relative tracking-widest">
        <div className={background}>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
