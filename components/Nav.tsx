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
      <div className="flex flex-col font-extralight md:text-2xl text-base -ml-4 md:-ml-8">
        <Link
          href={"https://www.instagram.com/flowergoods.studio/"}
          target="_blank"
          rel="noopener"
          key="instagram"
          className="py-8 transform -rotate-90 hover:opacity-50"
        >
          instagram
        </Link>
        <Link
          href="#"
          onClick={handleClick}
          key="email"
          className="py-8 transform -rotate-90 hover:opacity-50"
        >
          email
        </Link>
        <Link
          href={"/About"}
          key="About"
          className="py-8 transform -rotate-90 hover:opacity-50"
        >
          about
        </Link>
        <Link
          href={"/"}
          key="Home"
          className="  py-8 transform -rotate-90 hover:opacity-50"
        >
          home
        </Link>
      </div>
    </nav>
  );
};

export default SidebarNav;
