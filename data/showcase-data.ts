export interface Product {
  id: string;
  title: string;
  description: string;
  year: number;
  medium: string;
  dimensions: string;
  price: number;
  available: boolean;
  imageUrl: string;
  type: "original" | "print";
}

export const productData: Product[] = [
  {
    id: "1",
    title: "Urban Reflections",
    description:
      "A vibrant exploration of city life through abstract forms and bold colors, capturing the energy and movement of metropolitan existence.",
    year: 2024,
    medium: "Acrylic on Canvas",
    dimensions: '48" x 36"',
    price: 35000,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    type: "original",
  },
  {
    id: "1-print",
    title: "Urban Reflections - Print",
    description:
      "High-quality giclée print of the original Urban Reflections artwork on premium archival paper.",
    year: 2024,
    medium: "Giclée Print on Archival Paper",
    dimensions: "Various Sizes Available",
    price: 12500,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    type: "print",
  },
  {
    id: "2",
    title: "Serenity in Blue",
    description:
      "A calming composition that explores the depths of tranquility through various shades of blue and flowing organic forms.",
    year: 2024,
    medium: "Oil on Canvas",
    dimensions: '60" x 40"',
    price: 45000,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    type: "original",
  },
  {
    id: "2-print",
    title: "Serenity in Blue - Print",
    description:
      "Museum-quality reproduction of Serenity in Blue, capturing every nuance of the original's calming blue tones.",
    year: 2024,
    medium: "Giclée Print on Canvas",
    dimensions: "Various Sizes Available",
    price: 9500,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    type: "print",
  },
  {
    id: "4",
    title: "Nature's Symphony",
    description:
      "A celebration of natural forms and colors, this piece captures the harmony and rhythm found in the natural world.",
    year: 2023,
    medium: "Watercolor on Paper",
    dimensions: '24" x 32"',
    price: 1800,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80",
    type: "original",
  },
  {
    id: "5",
    title: "Emotional Landscapes",
    description:
      "An introspective journey through color and form, exploring the landscapes of human emotion and psychological states.",
    year: 2024,
    medium: "Acrylic on Canvas",
    dimensions: '54" x 42"',
    price: 35000,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    type: "original",
  },
  {
    id: "6",
    title: "Geometric Harmony",
    description:
      "A study in balance and proportion, using geometric forms to create a sense of order and visual rhythm.",
    year: 2023,
    medium: "Acrylic on Canvas",
    dimensions: '40" x 40"',
    price: 24000,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    type: "original",
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
