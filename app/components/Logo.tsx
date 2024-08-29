import { usePathname } from "next/navigation";

import Image from "next/image";
import saturdayFlowersYellow from "@/public/saturday-flowers-yellow.png";
import saturdayFlowersBlue from "@/public/saturday-flowers-blue.png";
import saturdayFlowersRed from "@/public/saturday-flowers-red.png";
import saturdayFlowersBrown from "@/public/saturday-flowers-brown.png";

import Link from "next/link";

const Logo: React.FC = () => {
  const currentPathname = usePathname();
  let home = false;
  let about = false;

  switch (currentPathname) {
    case "/":
      home = true;
      break;
    case "/about":
      about = true;
      break;
  }

  return (
    <Link href="/">
      <div className="relative group flex justify-center">
        {/* First image */}

        {home && (
          <>
            <div>
              <Image
                src={saturdayFlowersYellow}
                alt="First Image"
                style={{
                  maxWidth: "488px",
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="opacity-0 z-10 group-hover:opacity-100 bg-cover absolute top-[6px] transition-opacity duration-700 ease-in-out">
              {/* Second image */}
              <Image
                src={saturdayFlowersBlue}
                alt="Second Image"
                style={{
                  maxWidth: "488px",
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </>
        )}

        {about && (
          <>
            <div>
              <Image
                src={saturdayFlowersRed}
                alt="First Image"
                style={{
                  maxWidth: "488px",
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="opacity-0 z-10 group-hover:opacity-100 bg-cover absolute top-[-8.5px] transition-opacity duration-700 ease-in-out">
              {/* Second image */}
              <Image
                src={saturdayFlowersYellow}
                alt="Second Image"
                style={{
                  maxWidth: "488px",
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default Logo;
