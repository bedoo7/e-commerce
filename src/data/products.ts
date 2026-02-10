export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  images: string[];
  rating: number;
  reviews: number;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  tags: string[];
}

export const categories = [
  "All",
  "Outerwear",
  "Tops",
  "Bottoms",
  "Accessories",
  "Footwear",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Wool Blend Overcoat",
    price: 289,
    originalPrice: 350,
    description: "A timeless wool blend overcoat crafted from premium Italian fabric. Features a clean silhouette with notch lapels, two-button closure, and fully lined interior. Perfect for layering during the colder months.",
    category: "Outerwear",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80",
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    ],
    rating: 4.8,
    reviews: 124,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Charcoal", "Camel", "Navy"],
    inStock: true,
    tags: ["bestseller", "winter"],
  },
  {
    id: "2",
    name: "Cashmere Crewneck Sweater",
    price: 168,
    description: "Luxuriously soft pure cashmere crewneck sweater. Lightweight yet warm, with ribbed cuffs and hem. A wardrobe essential that pairs effortlessly with everything.",
    category: "Tops",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cda3a20?w=800&q=80",
    ],
    rating: 4.6,
    reviews: 89,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Oatmeal", "Black", "Forest"],
    inStock: true,
    tags: ["new"],
  },
  {
    id: "3",
    name: "Slim Tailored Trousers",
    price: 128,
    description: "Impeccably tailored slim-fit trousers in a stretch wool blend. Features a flat front, pressed crease, and clean finish. Ideal for both office and evening wear.",
    category: "Bottoms",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
    ],
    rating: 4.5,
    reviews: 67,
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Black", "Charcoal", "Tan"],
    inStock: true,
    tags: ["essential"],
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    price: 198,
    originalPrice: 245,
    description: "Minimalist crossbody bag in full-grain vegetable-tanned leather. Features adjustable strap, magnetic closure, and interior card slots. Ages beautifully over time.",
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    ],
    rating: 4.9,
    reviews: 203,
    colors: ["Cognac", "Black"],
    inStock: true,
    tags: ["bestseller"],
  },
  {
    id: "5",
    name: "Linen Relaxed Shirt",
    price: 95,
    description: "Breathable pure linen shirt with a relaxed, slightly oversized fit. Features a camp collar and coconut shell buttons. Perfect for warm-weather layering.",
    category: "Tops",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736c10?w=800&q=80",
    ],
    rating: 4.4,
    reviews: 56,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Sand", "Blue"],
    inStock: true,
    tags: ["summer"],
  },
  {
    id: "6",
    name: "Chelsea Leather Boots",
    price: 245,
    description: "Classic Chelsea boots in premium calfskin leather. Features elastic side panels, pull tab, and durable rubber sole. A versatile staple for any season.",
    category: "Footwear",
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&q=80",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
    ],
    rating: 4.7,
    reviews: 145,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "Brown"],
    inStock: true,
    tags: ["bestseller"],
  },
  {
    id: "7",
    name: "Cotton Chinos",
    price: 88,
    description: "Comfortable stretch cotton chinos with a modern slim fit. Garment-dyed for a lived-in feel. Features side pockets and welt back pockets.",
    category: "Bottoms",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
    ],
    rating: 4.3,
    reviews: 78,
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Khaki", "Navy", "Olive"],
    inStock: true,
    tags: ["essential"],
  },
  {
    id: "8",
    name: "Merino Wool Scarf",
    price: 65,
    description: "Ultra-soft merino wool scarf with a subtle herringbone pattern. Generously sized for versatile styling. Finished with hand-rolled edges.",
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80",
    ],
    rating: 4.6,
    reviews: 34,
    colors: ["Grey", "Burgundy", "Camel"],
    inStock: true,
    tags: ["winter", "new"],
  },
  {
    id: "9",
    name: "Puffer Down Jacket",
    price: 320,
    originalPrice: 395,
    description: "Lightweight yet incredibly warm down puffer jacket. Features recycled nylon shell, 90% goose down fill, and packable design. Water-resistant finish.",
    category: "Outerwear",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80",
    ],
    rating: 4.8,
    reviews: 92,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Olive", "Stone"],
    inStock: false,
    tags: ["winter"],
  },
  {
    id: "10",
    name: "Minimalist Leather Watch",
    price: 175,
    description: "Clean-dial analog watch with Swiss quartz movement. Features a 40mm brushed steel case and Italian leather strap. Water resistant to 50 meters.",
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
    ],
    rating: 4.7,
    reviews: 118,
    colors: ["Silver/Black", "Gold/Brown"],
    inStock: true,
    tags: ["bestseller"],
  },
  {
    id: "11",
    name: "Brushed Cotton T-Shirt",
    price: 48,
    description: "Essential crew neck t-shirt in heavyweight brushed cotton. Pre-washed for softness. Slightly relaxed fit with reinforced seams for lasting wear.",
    category: "Tops",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    ],
    rating: 4.5,
    reviews: 210,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Grey", "Navy"],
    inStock: true,
    tags: ["essential", "bestseller"],
  },
  {
    id: "12",
    name: "Suede Sneakers",
    price: 155,
    description: "Low-top sneakers in premium Italian suede. Features cushioned insole, tonal rubber sole, and minimal branding. Effortlessly elevates casual outfits.",
    category: "Footwear",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
    ],
    rating: 4.4,
    reviews: 63,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Sand", "White", "Grey"],
    inStock: true,
    tags: ["new"],
  },
];
