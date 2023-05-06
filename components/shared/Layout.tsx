import Nav from "../../components/Nav";
import Head from "next/head";

export interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  bgColor?: string;
}

export default function Layout({ children, bgColor, pageTitle }: LayoutProps) {
  return (
    <div className={`bg-${bgColor}`}>
      <div className={`h-full flex flex-row`}>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Nav />
        <div className="">{children} </div>
      </div>
    </div>
  );
}
