import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Showcase from "@/components/showcase";

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Showcase />
      {/* <Blogs /> */}
      {/* <Contact /> */}
      <Footer />
    </main>
  );
};
export default Home;
