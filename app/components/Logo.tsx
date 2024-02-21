import { usePathname } from "next/navigation";

import Image from "next/image";
import brownLogo from "@/public/brown-flowergoods-logo.webp";
import blueLogo from "@/public/blue-flowergoods-logo.webp";
import whiteLogo from "@/public/white-flowergoods-logo.webp";
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
      <div className="relative group">
        {/* First image */}

        {about && (
          <div className="group-hover:opacity-0 transition-opacity duration-700 ease-in-out">
            <Image
              src={whiteLogo}
              alt="First Image"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        )}
        {home && (
          <div className="group-hover:opacity-0 transition-opacity duration-700 ease-in-out">
            <Image
              src={brownLogo}
              alt="First Image"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        )}

        <div className="opacity-0 group-hover:opacity-100 bg-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out">
          {/* Second image */}
          <Image
            src={blueLogo}
            alt="Second Image"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </Link>
  );
};

export default Logo;
