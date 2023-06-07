import { useEffect, useState, Suspense } from "react";
import Layout from "../components/shared/Layout";
import Heading from "../components/Heading";
import StudioName from "@/components/StudioName";
import By from "@/components/By";
import NewYork from "@/components/NewYork";
import Video from "../components/Video";

import Loading from "../components/shared/Loading";

const Home = () => {
  if (typeof window === "undefined") {
    throw Error("Chat should only render on the client.");
  }

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
          <Heading className="my-8 sm:text-7xl text-[54px] text-center w-screen" />
          <div>
            <div className="flex flex-col items-center">
              <div>
                <By className="font-extralight text-lg pb-20" />
                <StudioName className="font-medium text-xl" />
              </div>
            </div>
          </div>
          <div className="m-auto w-[70%] pt-4">
            <Video src="/fg-vid-2.mp4" />
          </div>
          <div className="flex flex-col items-center py-4">
            <NewYork className="text-base font-thin pb-20" />
          </div>
        </div>
      ) : (
        // DESKTOP >1024px
        <div className="flex flex-row ml-10">
          <div className="w-4/6">
            <Suspense fallback={<Loading />}>
              <div className="flex flex-row items-center justify-center mt-40">
                <By className="font-extralight text-[32px] pr-16" />

                <div className="w-2/6">
                  <Video src="/fg-vid-1.mp4" />
                </div>
              </div>
              <StudioName className="pt-10 text-4xl font-medium justify-self-end text-center" />
            </Suspense>
          </div>
          <div className="h-screen flex items-center">
            <div className="bg-black w-[1px] h-[90%] mr-10"></div>
          </div>

          <div className="w-3/6 flex items-center">
            {/* border-l-[1px] border-black my-8 */}
            <div className="mt-20 pl-20">
              <Heading className="text-8xl text-center" />
              <div className="mt-14 mx-auto max-w-[300px]">
                <Video src="/fg-vid-2.mp4" />
              </div>
              <NewYork className="pt-10 font-thin text-2xl text-center" />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Home;
