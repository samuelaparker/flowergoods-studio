import Logo from "@/app/components/Logo";
import Nav from "@/app/components/Nav";

//build
const Home = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-[#1893f8] w-full h-full">
          <div className="absolute bg-desktop bg-cover bg-no-repeat [background-position:50%50%] opacity-30 "></div>
          <div className="container">
            <div className="w-60">
              <Logo />
            </div>
            <div>
              <Nav />
            </div>
            <h1>testx</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
