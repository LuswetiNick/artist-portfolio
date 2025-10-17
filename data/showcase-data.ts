export interface Product {
  id: string;
  title: string;
  description: string;
  year: number;
  materials: string;
  dimensions: string;
  available: boolean;
  image: string;
  category: string;
}

export interface PotProduct {
  id: string;
  category: "Pots";
  image: string;
}

export type ShowcaseProduct = Product | PotProduct;

export const productData: ShowcaseProduct[] = [
  {
    id: "1",
    title: "Crone 1",
    description:
      "Inspired by the concept of the curious maiden encapsulating both the wisdom of a crone and the latent strength of a mother. his is the crone. One with the elements, plant knowledge, a wisdom portal, present to intergenerational sharing.",
    year: 2025,
    materials: "Glass, gold leaf, cowrie shell.",
    dimensions: "11/2 ft by 2 ft",
    available: true,
    image: "/images/IMG-20250925-WA0024.jpg",
    category: "Murals",
  },
  {
    id: "2",
    title: "Earth song",
    description:
      "Mother nurture, the nourisher, culture keeper, fountain of unfettered love, the living soil, the whole universe bowing to her presence, the universe herself!",
    year: 2020,
    materials: "Ceramic tiles, gold leaf",
    dimensions: "2 ft by 3 ft",
    available: true,
    image: "/images/IMG-20250925-WA0023.jpg",
    category: "Wall panels",
  },
  {
    id: "3",
    title: "Samburu red",
    description:
      "Feared for their valour in battle, effeminate in their grooming. Inspired by the dissonance occasioned by a flock of Samburu Moran's (warriors ) passing by, resplendent in their plumage.",
    year: 2022,
    materials: "Ceramic tiles",
    dimensions: "2 ft by 1 ft",
    available: true,
    image: "/images/IMG-20250925-WA0020.jpg",
    category: "Wall panels",
  },
  {
    id: "4",
    title: "No cry",
    description:
      "An ode to my sister, to as she negotiates the labyrinth, on her journey to continued well-being. No beloved, no cry.",
    year: 2010,
    materials: "Ceramic tiles, cowrie shells",
    dimensions: "1 ft diameter",
    available: true,
    image: "/images/IMG-20250925-WA0011.jpg",
    category: "Wall panels",
  },
  {
    id: "5",
    title: "Sun kiss",
    description:
      "Mother and child, the joy of the moment shining bright on them, as so the potentiailty of the promise of future.",
    year: 2013,
    materials: "Ceramic tiles",
    dimensions: "2ft by 1 ft",
    available: true,
    image: "/images/IMG-20250925-WA0019.jpg",
    category: "Wall panels",
  },
  {
    id: "6",
    title: "Dramma 1",
    description:
      "This is how the rhythm is going to get you; ancient, vibrant, mystical,uncompromisingly moving.",
    year: 2011,
    materials: "Ceramic tiles",
    dimensions: "2ft by 1 ft",
    available: true,
    image: "/images/IMG-20250925-WA0015.jpg",
    category: "Wall panels",
  },
  {
    id: "7",
    title: "Dramma 2",
    description:
      "Still moving. Trance into vibrational heaven, guided by the voices of ancient spirits.",
    year: 2025,
    materials: "Ceramic tiles",
    dimensions: "1 ft by 11/2 ft",
    available: true,
    image: "/images/IMG-20250925-WA0017.jpg",
    category: "Wall panels",
  },
  {
    id: "8",
    title: "Mandrill",
    description:
      "Isn't he a beauty? The colourful menace of a mandrill’s stare.",
    year: 2013,
    materials: "Ceramic tiles, Marble",
    dimensions: "21/2 ft by 21/2 ft",
    available: true,
    image: "/images/mandrill.jpg",
    category: "Wall panels",
  },
  {
    id: "9",
    title: "Samaj mosaic",
    description:
      "An epic project. A team of six. Nine fun but deeply intense months. Full of symbolism, it towers over a Kenyan Hindu community, who graciously commissioned it. A collaboration with Encompass Studios.",
    year: 2017,
    materials: "Granite",
    dimensions: "56 square meters",
    available: true,
    image: "/images/IMG-20250925-WA0016.jpg",
    category: "Murals",
  },
  {
    id: "10",
    title: "Creation",
    description:
      "Sketched by John Clark, translated into mosaic-speak by yours truly, with a livicated team of mosaic first -timers.. A collaboration with Encompass Studios.",
    year: 2014,
    materials: "Granite",
    dimensions: "40 square meters",
    available: true,
    image: "/images/creation1.jpg",
    category: "Murals",
  },
  {
    id: "11",
    title: "Fowl dreams",
    description:
      "A guinea fowl’s poise. The patterns of its polka-dotted apparel play out in my mind like a game of chess.",
    year: 2020,
    materials: "Granite",
    dimensions: "1 ft by 2ft",
    available: true,
    image: "/images/IMG-20250925-WA0021.jpg",
    category: "Wall panels",
  },
  {
    id: "12",
    title: "Wedding party",
    description:
      "A friend of mine got married. This is as a result. A play on the Nairobi skyline.",
    year: 2016,
    materials: "Granite",
    dimensions: "1 ft by 2ft",
    available: true,
    image: "/images/IMG-20250925-WA0018.jpg",
    category: "Wall panels",
  },
  {
    id: "13",
    title: "Nyumbani",
    description:
      "A guinea fowl’s poise. The patterns of its polka-dotted apparel play out in my mind like a game of chess.",
    year: 2012,
    materials: "Ceramic tiles",
    dimensions: "15 sq meters",
    available: true,
    image: "/images/IMG-20250925-WA0012.jpg",
    category: "Murals",
  },
  {
    id: "14",
    title: "Limber Mursik",
    description:
      "Mursik, served in a gourd. Quintsse tential of the Kalenjin, a community renowned for very athletic exploits . Now as they limber up at dawn…",
    year: 2019,
    materials: "Granite",
    dimensions: "11 square meters",
    available: true,
    image: "/images/IMG-20250925-WA0014.jpg",
    category: "Murals",
  },
  {
    id: "15",
    category: "Pots",
    image: "/images/IMG-20251006-WA0004.jpg",
  },
  {
    id: "16",
    category: "Pots",
    image: "/images/IMG-20251006-WA0005.jpg",
  },
  {
    id: "17",
    category: "Pots",
    image: "/images/IMG-20251006-WA0006.jpg",
  },
  {
    id: "18",
    category: "Pots",
    image: "/images/IMG-20251006-WA0007.jpg",
  },
  {
    id: "19",
    category: "Pots",
    image: "/images/IMG-20251006-WA0008.jpg",
  },
  {
    id: "20",
    category: "Pots",
    image: "/images/IMG-20251006-WA0009.jpg",
  },
  {
    id: "21",
    category: "Pots",
    image: "/images/IMG-20251006-WA0010.jpg",
  },
  {
    id: "22",
    title: "River between",
    description: "A language of no words",
    year: 2019,
    materials: "Ceramic tiles on stone.",
    dimensions: "3 ft by 3ft",
    available: true,
    image: "/images/IMG-20251017-WA0012.jpg",
    category: "Wall panels",
  },
  {
    id: "23",
    title: "Eye fly",
    description:
      "A fanciful take on a butterfly with multiple eye spots and a generous palette.Now you see me",
    year: 2019,
    materials: "Glass mosaic tiles",
    dimensions: "2 ft by 2ft",
    available: true,
    image: "/images/IMG-20251017-WA0013.jpg",
    category: "Wall panels",
  },
  {
    id: "24",
    title: "Coco cabin",
    description:
      "The sun shines a yellow smile upon a fisherman as he glides gently on his boat past a whimsical cabin by the sea.",
    year: 2019,
    materials: "Granite",
    dimensions: "11 square meters ",
    available: true,
    image: "/images/IMG-20251017-WA0014.jpg",
    category: "Murals",
  },
  {
    id: "25",
    title: "Wine on gold",
    description: "How she wears her coat of many colours!",
    year: 2019,
    materials: "Ceramic tiles",
    dimensions: "1 ft by 2 ft ",
    available: true,
    image: "/images/IMG-20251017-WA0015.jpg",
    category: "Wall panels",
  },
  {
    id: "26",
    title: "Taking stork",
    description:
      "Beauty by another name.The frog at the other end of this yellow-billed stork’s stare might disagree.",
    year: 2019,
    materials: "Ceramic tiles",
    dimensions: "1 square meter",
    available: true,
    image: "/images/IMG-20251017-WA0016.jpg",
    category: "Wall panels",
  },
  {
    id: "27",
    title: "Mos mos",
    description:
      "Slow but…sure? Asked the hopper right before.Sorry. It's over now.",
    year: 2019,
    materials: "Ceramic tiles",
    dimensions: "6 square meters ",
    available: true,
    image: "/images/mosmos.jpg",
    category: "Wall panels",
  },
];

export function getProductById(id: string): ShowcaseProduct | undefined {
  return productData.find((product) => product.id === id);
}

export function getRecentProducts(limit = 3): Product[] {
  return productData
    .filter((product): product is Product => "title" in product) // Filter out Pots
    .sort((a, b) => new Date(b.year).getTime() - new Date(a.year).getTime())
    .slice(0, limit);
}
