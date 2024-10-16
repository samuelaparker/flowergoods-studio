import { usePathname } from "next/navigation";

import Image from "next/image";
import saturdayFlowersYellow from "@/public/saturday-flowers-yellow.png";
import saturdayFlowersBlue from "@/public/saturday-flowers-blue.png";
import saturdayFlowersRed from "@/public/saturday-flowers-red.png";
import saturdayFlowersDarkBlue from "@/public/saturday-flowers-dark-blue.png";

import Link from "next/link";

const Logo: React.FC = () => {
  const currentPathname = usePathname();
  let home = false;
  let about = false;
  let work = false;

  switch (currentPathname) {
    case "/":
      home = true;
      break;
    case "/about":
      about = true;
      break;
    case "/work":
      work = true;
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
                src={saturdayFlowersDarkBlue}
                alt="First Image"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="opacity-0 z-10 group-hover:opacity-100 bg-cover absolute transition-opacity duration-700 ease-in-out">
              {/* Second image */}
              <Image
                src={saturdayFlowersYellow}
                alt="Second Image"
                style={{
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
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="opacity-0 z-10 group-hover:opacity-100 bg-cover absolute transition-opacity duration-700 ease-in-out">
              {/* Second image */}
              <Image
                src={saturdayFlowersYellow}
                alt="Second Image"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </>
        )}
        {work && (
          <>
            <div>
              <Image
                src={saturdayFlowersBlue}
                alt="First Image"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="opacity-0 z-10 group-hover:opacity-100 bg-cover absolute transition-opacity duration-700 ease-in-out">
              {/* Second image */}
              <Image
                src={saturdayFlowersYellow}
                alt="Second Image"
                style={{
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
