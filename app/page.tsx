import About from "@/components/about";
import Blogs from "@/components/blogs";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Shop from "@/components/shop";
import Showcase from "@/components/showcase";

const Home = () => {
	return (
		<main className="min-h-screen bg-background">
			<Hero />
			<About />
			<Showcase />
			{/* <Blogs /> */}
			<Contact />
			<Footer />
		</main>
	);
};
export default Home;
