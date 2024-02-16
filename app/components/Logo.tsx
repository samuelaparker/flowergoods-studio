import Image from "next/image";
import brownLogo from "@/public/brown-flowergoods-logo.webp";
import blueLogo from "@/public/blue-flowergoods-logo.webp";

const Logo: React.FC = () => {
  return (
    <div className="relative group">
      {/* First image */}
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
  );
};

export default Logo;