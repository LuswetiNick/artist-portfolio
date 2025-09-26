export interface Product {
	id: string;
	title: string;
	description: string;
	year: number;
	materials: string;
	dimensions: string;
	available: boolean;
	image: string;
}

export const productData: Product[] = [
	{
		id: "1",
		title: "Crone 1",
		description:
			"Inspired by the concept of the curious maiden encapsulating both the wisdom of a crone and the latent strength of a mother. his is the crone. One with the elements, plant knowledge, a wisdom portal, present to intergenerational sharing.",
		year: 2024,
		materials: "Glass, gold leaf, cowrie shell.",
		dimensions: "11/2 ft by 2 ft",
		available: true,
		image: "/images/IMG-20250925-WA0024.jpg",
	},
	{
		id: "2",
		title: "Earth song",
		description:
			"Mother nurture, the nourisher, culture keeper, fountain of unfettered love, the living soil, the whole universe bowing to her presence, the universe herself!",
		year: 2024,
		materials: "Giclée Print on Archival Paper",
		dimensions: "Various Sizes Available",
		available: true,
		image: "/images/IMG-20250925-WA0023.jpg",
	},
	{
		id: "3",
		title: "Samburu red",
		description:
			"Feared for their valour in battle, effeminate in their grooming. Inspired by the dissonance occasioned by a flock of Samburu Moran's (warriors ) passing by, resplendent in their plumage.",
		year: 2024,
		materials: "Ceramic tiles",
		dimensions: "2 ft by 1 ft",
		available: true,
		image: "/images/IMG-20250925-WA0020.jpg",
	},
	{
		id: "4",
		title: "No cry",
		description:
			"An ode to my sister, to as she negotiates the labyrinth, on her journey to continued well-being. No beloved, no cry.",
		year: 2024,
		materials: "Ceramic tiles, cowrie shells",
		dimensions: "1 ft diameter",
		available: true,
		image: "/images/IMG-20250925-WA0011.jpg",
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
	},
];

export function getProductById(id: string): Product | undefined {
	return productData.find((product) => product.id === id);
}

export function getRecentProducts(limit = 3): Product[] {
	return productData
		.sort((a, b) => new Date(b.year).getTime() - new Date(a.year).getTime())
		.slice(0, limit);
}
