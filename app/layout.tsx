import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Shrikhand } from "next/font/google";
import Nav from "./components/Nav";
import Script from "next/script";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Flowergoods Studio",
  description: "Flowergoods Studio",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
};

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
  return (
    <html lang="en" className={`${montserrat.variable} ${shrikhand.variable}`}>
      <meta
        name="facebook-domain-verification"
        content="vmz20p53g8bsodl9kle05xneb53j8t"
      />
      <Script />
      <body className="min-h-[100svh] sm:bg-desktop bg-cover bg-no-repeat overflow-hidden relative tracking-widest">
        <div className="bg-mobile  w-full min-h-[100svh]  bg-[#0080ff] bg-opacity-75">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}