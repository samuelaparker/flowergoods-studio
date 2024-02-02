import { Metadata } from "next";
import { Montserrat } from "next/font/google";
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

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <meta
        name="facebook-domain-verification"
        content="vmz20p53g8bsodl9kle05xneb53j8t"
      />
      <Script />
      <body className="min-h-[100svh] bg-mobile sm:bg-desktop bg-cover bg-no-repeat text-[#E4E4E4] overflow-hidden ">
        <div className=" min-h-[100svh] container mx-auto relative pt-4">
          {children}
          <div className="absolute bottom-0">
            <div className="my-8">
              <Nav />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
