export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  wholesalePrice: number;
  wholesaleMinimum: number;
  unit: string;
  stock: number;
  icon: string;
  featured: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Nigerian Rice",
    slug: "premium-nigerian-rice",
    category: "Groceries",
    description:
      "High-quality premium Nigerian rice suitable for homes, restaurants, events and wholesale businesses.",
    price: 45000,
    wholesalePrice: 42000,
    wholesaleMinimum: 5,
    unit: "25kg Bag",
    stock: 120,
    icon: "🍚",
    featured: true,
  },

  {
    id: "2",
    name: "Vegetable Cooking Oil",
    slug: "vegetable-cooking-oil",
    category: "Groceries",
    description:
      "Quality vegetable cooking oil suitable for everyday family cooking, restaurants and food businesses.",
    price: 12000,
    wholesalePrice: 11000,
    wholesaleMinimum: 10,
    unit: "5 Litres",
    stock: 85,
    icon: "🫗",
    featured: true,
  },

  {
    id: "3",
    name: "Laundry Detergent",
    slug: "laundry-detergent",
    category: "Household",
    description:
      "Powerful laundry detergent designed to help remove stains and keep clothes fresh and clean.",
    price: 8500,
    wholesalePrice: 7600,
    wholesaleMinimum: 5,
    unit: "Carton",
    stock: 60,
    icon: "🧼",
    featured: true,
  },

  {
    id: "4",
    name: "Tissue Paper",
    slug: "tissue-paper",
    category: "Household",
    description:
      "Soft and reliable tissue paper for homes, offices, hotels, restaurants and other businesses.",
    price: 7500,
    wholesalePrice: 6800,
    wholesaleMinimum: 10,
    unit: "Pack",
    stock: 150,
    icon: "🧻",
    featured: true,
  },

  {
    id: "5",
    name: "Premium Beans",
    slug: "premium-beans",
    category: "Groceries",
    description:
      "Clean and quality beans suitable for household consumption, restaurants and bulk buyers.",
    price: 30000,
    wholesalePrice: 28000,
    wholesaleMinimum: 5,
    unit: "25kg Bag",
    stock: 90,
    icon: "🫘",
    featured: true,
  },

  {
    id: "6",
    name: "Spaghetti",
    slug: "spaghetti",
    category: "Groceries",
    description:
      "Quality spaghetti suitable for quick and delicious family meals and food businesses.",
    price: 12000,
    wholesalePrice: 10500,
    wholesaleMinimum: 10,
    unit: "Carton",
    stock: 100,
    icon: "🍝",
    featured: false,
  },

  {
    id: "7",
    name: "Bottled Water",
    slug: "bottled-water",
    category: "Beverages",
    description:
      "Clean and refreshing bottled drinking water for homes, offices, events and businesses.",
    price: 4500,
    wholesalePrice: 4000,
    wholesaleMinimum: 10,
    unit: "Pack",
    stock: 200,
    icon: "💧",
    featured: false,
  },

  {
    id: "8",
    name: "Soft Drink",
    slug: "soft-drink",
    category: "Beverages",
    description:
      "Refreshing soft drinks suitable for homes, parties, restaurants and events.",
    price: 9000,
    wholesalePrice: 8200,
    wholesaleMinimum: 10,
    unit: "Crate",
    stock: 75,
    icon: "🥤",
    featured: false,
  },

  {
    id: "9",
    name: "Bathing Soap",
    slug: "bathing-soap",
    category: "Personal Care",
    description:
      "Everyday bathing soap designed for personal hygiene and freshness.",
    price: 6500,
    wholesalePrice: 5800,
    wholesaleMinimum: 10,
    unit: "Carton",
    stock: 110,
    icon: "🧼",
    featured: false,
  },

  {
    id: "10",
    name: "Toothpaste",
    slug: "toothpaste",
    category: "Personal Care",
    description:
      "Everyday toothpaste for maintaining good oral hygiene and fresh breath.",
    price: 7000,
    wholesalePrice: 6200,
    wholesaleMinimum: 10,
    unit: "Carton",
    stock: 95,
    icon: "🪥",
    featured: false,
  },

  {
    id: "11",
    name: "Cooking Pot Set",
    slug: "cooking-pot-set",
    category: "Kitchen",
    description:
      "Durable cooking pot set suitable for everyday home cooking and professional kitchens.",
    price: 35000,
    wholesalePrice: 32000,
    wholesaleMinimum: 5,
    unit: "Set",
    stock: 35,
    icon: "🍳",
    featured: false,
  },

  {
    id: "12",
    name: "Baby Diapers",
    slug: "baby-diapers",
    category: "Baby Products",
    description:
      "Comfortable and absorbent baby diapers suitable for everyday baby care.",
    price: 15000,
    wholesalePrice: 13500,
    wholesaleMinimum: 5,
    unit: "Pack",
    stock: 70,
    icon: "👶",
    featured: false,
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getProductsByCategory(category: string) {
  return products.filter(
    (product) =>
      product.category.toLowerCase() === category.toLowerCase()
  );
}

export function searchProducts(searchTerm: string) {
  const term = searchTerm.toLowerCase().trim();

  if (!term) {
    return products;
  }

  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
  );
}