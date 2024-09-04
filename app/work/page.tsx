import Image from "next/image";
import imageCollageDesktop from "@/public/image-collage-desktop.png";
import imageCollageMobile from "@/public/image-collage-mobile.png";
import aGlanceAtOurWork from "@/public/a-glance-at-our-work.png";
const Work: React.FC = () => {
  return (
    <>
      <div className="mt-8 p-3 relative">
        <div className="absolute lg:w-1/4 w-2/3 left-6 lg:-top-3 -top-5">
          <Image src={aGlanceAtOurWork} alt="A glance at our work" />
        </div>
        <div className="lg:block hidden">
          <Image
            src={imageCollageDesktop}
            alt="collage of past floral arrangements"
          />
        </div>
        <div className="block lg:hidden">
          <Image
            src={imageCollageMobile}
            alt="collage of past floral arrangements"
          />
        </div>
      </div>
    </>
  );
};

export default Work;
