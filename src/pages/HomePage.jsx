import EarlyAccess from "../components/EarlyAccess";
import Features from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Productive from "../components/Productive";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Productive />
      <Testimonials />
      <EarlyAccess />
    </>
  );
};

export default HomePage;
