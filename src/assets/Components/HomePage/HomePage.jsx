import Appointment from "./Appointment/Appointment";
import Brands from "./Brands/Brands";
import ClientsSection from "./ClientSection/ClientsSection";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import OurProject from "./OurProject/OurProject";
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
      <OurProject />
      <ClientsSection />
      <Appointment />
    </>
  );
};

export default HomePage;
