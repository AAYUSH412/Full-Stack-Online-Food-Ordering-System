import Header from "../components/Home/Header";
import Restaurant from "../components/Home/Restaurant";

import Testimonalis from "../components/Home/Testimonials";
import FAQsSection from "../components/Home/Faqs";

const Home = () => {
  return (
    <>
      <Header />
      <Restaurant />

        <Testimonalis />
        
        <FAQsSection />
    </>
  );
};

export default Home;
