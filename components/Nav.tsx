import React from "react";
import Link from "next/link";

interface Props {}

const SidebarNav: React.FC<Props> = () => {
  const subject = "Inquiry from flowergoods.studio";
  const body =
    "Hi,\n\nI wanted to get in touch with you about...\n\nBest regards,\nYour Name";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = `mailto:example@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <nav className="my-8 fixed inset-y-0 left-0 flex flex-col justify-between h-full py-">
      <div className="flex flex-col">
        <a
          href={"https://www.instagram.com/flowergoods.studio/"}
          target="_blank"
          rel="noopener"
          key="instagram"
          className="px-4 py-8 text-gray-700 transform -rotate-90"
        >
          instagram
        </a>
        <a
          href="#"
          onClick={handleClick}
          key="email"
          className="px-4 py-8 text-gray-700 transform -rotate-90"
        >
          email
        </a>
        <Link
          href={"/About"}
          key="About"
          className="px-4 py-8 text-gray-700 transform -rotate-90"
        >
          about
        </Link>
        <Link
          href={"/"}
          key="Home"
          className="px-4 py-8 text-gray-700 transform -rotate-90"
        >
          home
        </Link>
      </div>
    </nav>
  );
};

export default SidebarNav;
