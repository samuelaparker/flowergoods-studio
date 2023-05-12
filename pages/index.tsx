import { useEffect, useState } from "react";
import Layout from "../components/shared/Layout";
import Heading from "../components/Heading";
import StudioName from "@/components/StudioName";
import By from "@/components/By";
import NewYork from "@/components/NewYork";
import Video from "../components/Video";

const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#64cd85";
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
      setIsLoaded(true);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isLoaded) {
    return null; // Render nothing until the initial loading is complete
  }

  return (
    <Layout pageTitle="Home Page">
      {isSmallScreen ? (
        // SMALLER THAN DESKTOP
        <div className="">
          <Heading className="my-8 sm:text-7xl text-4xl font-light text-right" />
          <div>
            <div className="flex flex-col items-center">
              <div>
                <By className="font-thin text-base pb-20" />
                <StudioName className="text-base font-medium sm:text-2xl" />
              </div>
            </div>
          </div>
          <div className="my-4">
            <Video src="/fg-vid-1.mp4" />
          </div>
          <div className="flex flex-col items-center py-4">
            <NewYork className="text-base font-thin pb-20" />
          </div>
        </div>
      ) : (
        // DESKTOP >1024px
        <div className="flex flex-row">
          <div>
            <div className="flex flex-row items-center mt-40 pr-20">
              <By className="font-thin text-3xl pr-10" />
              <div className="">
                <Video src="/fg-vid-1.mp4" />
              </div>
            </div>
            <StudioName className="pt-20 text-4xl font-bold pr-20" />
          </div>
          <div className="border-l-[1px] border-black mt-20 pl-20">
            <Heading className="text-8xl text-center" />
            <div className="mt-14">
              <Video src="/fg-vid-2.mp4" />
            </div>
            <NewYork className="pt-10 font-light text-2xl text-center" />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Home;
