import Image from "next/image";

const showcaseData = [
  {
    title: "Ephemeral Dreams",
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    title: "Urban Symphony",
    image:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    category: "Mixed Media",
  },
  {
    title: "Fragmented Memories",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    category: "Sculpture",
  },
  {
    title: "Whispers of Nature",
    image:
      "https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    title: "Geometric Harmony",
    image:
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80",
  },
  {
    title: "Ethereal Light",
    image:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
  },
];

const Showcase = () => {
  return (
    <section className="bg-muted px-6 py-20" id="showcase">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center font-bold text-3xl md:text-4xl">
          My Showcase
        </h2>
        <div className="mx-auto mb-16 h-1 w-20 rounded-full bg-primary" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {showcaseData.map((item) => (
            <div
              className="group relative transform overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              key={item.title}
            >
              <Image
                alt={item.title}
                className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                height={500}
                src={item.image}
                width={500}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="font-semibold text-white text-xl">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Showcase;
