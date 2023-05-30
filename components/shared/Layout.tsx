import Nav from "../../components/Nav";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import Loading from "./loading";
import { Suspense } from "react";

export interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function Layout({ children, pageTitle }: LayoutProps) {
  return (
    <div className={`${montserrat.variable}`}>
      <div className="font-sans  max-w-[1728px] h-screen">
        {/* border border-black border-solid */}
        <div className="flex justify-start">
          <Head>
            <title>{pageTitle}</title>
          </Head>
          <div>
            <Nav />
          </div>
          <Suspense fallback={<Loading />}>
            <div className="">{children} </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
