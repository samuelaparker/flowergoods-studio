import Nav from "../../components/Nav";
import Head from "next/head";

export interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
  return (
    <div className="mr-4 md:mr-8 mb-10 font-montserrat">
      <div className="flex flex-row">
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Nav />
        <div className="">{children} </div>
      </div>
    </div>
  );
}
