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
    <nav className="mt-10 inset-y-0 left-0  h-full">
      <div className="flex flex-col font-extralight text-2xl -ml-8">
        <a
          href={"https://www.instagram.com/flowergoods.studio/"}
          target="_blank"
          rel="noopener"
          key="instagram"
          className="py-8 transform -rotate-90"
        >
          instagram
        </a>
        <a
          href="#"
          onClick={handleClick}
          key="email"
          className="py-8 transform -rotate-90"
        >
          email
        </a>
        <Link href={"/About"} key="About" className="py-8 transform -rotate-90">
          about
        </Link>
        <Link href={"/"} key="Home" className="  py-8 transform -rotate-90">
          home
        </Link>
      </div>
    </nav>
  );
};

export default SidebarNav;
