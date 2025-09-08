import Image from "next/image";

const About = () => {
  return (
    <section className="px-6 py-20" id="about">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center font-bold text-3xl md:text-4xl">
          About Me
        </h2>
        <div className="mx-auto mb-16 h-1 w-20 rounded-full bg-primary" />
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <Image
              alt="Portrait of the artist"
              className="h-auto w-full transform rounded-lg shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              height={500}
              src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              width={500}
            />
            <div className="-bottom-6 -right-6 -z-10 absolute h-32 w-32 rounded-full bg-primary-100" />
            <div className="-top-6 -left-6 -z-10 absolute h-24 w-24 rounded-full bg-primary-200" />
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-2xl">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h3>
            <p className="mb-6 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet
              consectetur adipiscing elit quisque faucibus ex sapien. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. Vitae
              pellentesque sem placerat in id cursus mi.
            </p>
            <p className="mb-6 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet
              consectetur adipiscing elit quisque faucibus ex sapien. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. Vitae
              pellentesque sem placerat in id cursus mi.
            </p>
            <div className="flex space-x-4">Social Links</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
