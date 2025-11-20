import type { Metadata } from "next";
import About from "@/components/about";
import Blogs from "@/components/blogs";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Showcase from "@/components/showcase";
import { buildMetadata } from "@/lib/seo";

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Showcase />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  );
};

export function generateMetadata(): Metadata {
  return buildMetadata({ pathname: "/" });
}

export default Home;
