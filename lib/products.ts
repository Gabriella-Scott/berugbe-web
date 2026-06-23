export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  accent: "red" | "blue" | "navy";
  buyUrl: string;
};

export const products: Product[] = [
  {
    id: "alpha-t5",
    name: "Alpha-T5",
    category: "Training Ball",
    price: "€31",
    description:
      "Built for everyday training. Dual-grip surface and a hard-wearing 3-ply build that holds up season after season.",
    accent: "red",
    buyUrl: "https://www.berugbe.com/fr",
  },
  {
    id: "elipse",
    name: "Elipse",
    category: "Match Ball",
    price: "€65",
    description:
      "A true match ball. In-seam valve for cleaner flight and a dual-grip surface tuned for kicking and passing.",
    accent: "blue",
    buyUrl: "https://www.berugbe.com/fr",
  },
  {
    id: "shark",
    name: "Shark",
    category: "Competition Ball",
    price: "€170",
    description:
      "Top-tier competition ball. The Shark dimple grip sheds water in wet play, with H+ embossing for a consistent shape.",
    accent: "navy",
    buyUrl: "https://www.berugbe.com/fr",
  },
];