

import WrapperHeader from "@/components/wrapperHeader/WrapperHeader";
import Block from "@/components/block/Block";
import Need from "@/components/need/Need";
import Maping from "@/components/map/Map";
import Pricing from "@/components/pricing/Pricing";
import Question from "@/components/question/Question";
import Footer from "@/components/footer/Footer";


function HomePage() {

  return (
    <main>
      <WrapperHeader />
      <Block />
      <Need />
      <Maping />
      <section className="core"></section>
      <Pricing />
      <Question />
      <Footer />
    </main>
  );
}

export default HomePage;
