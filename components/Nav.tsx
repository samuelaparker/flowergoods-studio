import React from "react";
import Link from "next/link";

interface Props {}

const SidebarNav: React.FC<Props> = () => {
  const subject = "";
  const body = "";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = `mailto:hello@flowergoods.studio?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <nav className="w-[20px] ml-4 md:ml-8 md:mt-[350px] mt-[250px]">
      <div className="font-extralight md:text-2xl md:leading-0 text-base -rotate-90 translate-y-[600%]">
        <Link href={"/"} key="Home" className="mx-4 hover:opacity-50">
          home
        </Link>
        <Link
          href={"/About"}
          key="About"
          className="py-8  mx-4  hover:opacity-50"
        >
          about
        </Link>

        <Link
          href="#"
          onClick={handleClick}
          key="email"
          className="py-8   mx-4 hover:opacity-50"
        >
          email
        </Link>
        <Link
          href={"https://www.instagram.com/flowergoods.studio/"}
          target="_blank"
          rel="noreferrer noopener"
          key="instagram"
          className="py-8  mx-4 hover:opacity-50"
        >
          instagram
        </Link>
        <Link
          href={"https://flowergoodstudio.myshopify.com/"}
          key="shop"
          rel="noreferrer noopener"
          target="_blank"
          className="py-8  mx-4 hover:opacity-50"
        >
          shop
        </Link>
      </div>
    </nav>
  );
};

export default SidebarNav;
