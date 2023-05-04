import React from "react";
import Link from "next/link";

interface Props {}

const SidebarNav: React.FC<Props> = () => {
  return (
    <nav className="fixed inset-y-0 left-0 flex flex-col justify-between h-full py-">
      <div className="flex flex-col">
        <Link
          href={"/"}
          key="instagram"
          className="px-4 py-8 text-gray-700 transform -rotate-90"
        >
          instagram
        </Link>
        <Link
          href={"/"}
          key="email"
          className="px-4 py-8 text-gray-700 transform -rotate-90"
        >
          email
        </Link>
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
