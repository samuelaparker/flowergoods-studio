import Nav from "../../components/Nav";
import Head from "next/head";

export interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  bgColor?: string;
}

export default function Layout({ children, bgColor, pageTitle }: LayoutProps) {
  return (
    <div className={`flex min-h-screen flex-col text-black bg-${bgColor}`}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Nav />
      <div className="mt-20 flex-grow px-4 md:px-16 lg:px-32">{children} </div>
    </div>
  );
}
