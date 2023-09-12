import "./global.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <section className="banner">
        <div className="wrapper">
          <Header />
        </div>
      </section>

      <Footer />
    </main>
  );
}
