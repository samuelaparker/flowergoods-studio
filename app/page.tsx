import Logo from "@/app/components/Logo";
import Nav from "@/app/components/Nav";

//build
const Home = () => {
  return (
    <>
      <div className="relative">
        <div className="container flex flex-col">
          <div className="w-1/2">
            <Logo />
          </div>
          <div className="justify-center">
            <Nav />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
