import React from "react";
import Link from "next/link";

interface Props {}

const SidebarNav: React.FC<Props> = () => {
  const subject = "Inquiry from flowergoods.studio";
  const body =
    "Hi,\n\nI wanted to get in touch with you about...\n\nBest regards,\nYour Name";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = `mailto:hello@flowergoods.studio?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <nav className="w-[20px] md:mt-[300px] mt-[200px]">
      <div className="font-extralight md:text-2xl md:leading-0 text-base ml-6 md:ml-8 -rotate-90 translate-y-[600%]">
        <Link href={"/"} key="Home" className="  py-8   mx-4 hover:opacity-50">
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
          rel="noopener"
          key="instagram"
          className="py-8  mx-4 hover:opacity-50"
        >
          instagram
        </Link>
      </div>
    </nav>
  );
};

export default SidebarNav;
