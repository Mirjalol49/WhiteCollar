import Brands from "./Brands/Brands";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import SecondSec from "./SecondSection/SecondSec";
import Solutions from "./Solutions/Solutions";
import WhyChooseMe from "./WhyChooseMe/WhyChooseMe";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <SecondSec />
      <Brands />
      <Solutions />
      <WhyChooseMe />
    </>
  );
};

export default HomePage;
