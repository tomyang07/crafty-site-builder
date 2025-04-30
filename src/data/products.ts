
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  longDescription: string;
  imageUrl: string;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Hand-woven Basket",
    price: 45.99,
    description: "A beautifully crafted basket made from natural materials.",
    longDescription: "This hand-woven basket is meticulously crafted using traditional techniques. Made from sustainable natural materials, each basket is unique with subtle variations in color and texture. Perfect for storage, decoration, or as a thoughtful gift.",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
    category: "Home",
    featured: true
  },
  {
    id: "2",
    name: "Ceramic Mug Set",
    price: 36.50,
    description: "Set of 4 handmade ceramic mugs in earthy tones.",
    longDescription: "Each mug in this set of 4 is individually handcrafted on a potter's wheel. The earthy glazes are food-safe and showcase beautiful color variations. These sturdy mugs hold approximately 12oz and are microwave and dishwasher safe.",
    imageUrl: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&q=80",
    category: "Kitchen",
    featured: true
  },
  {
    id: "3",
    name: "Embroidered Pillow Cover",
    price: 29.99,
    description: "Delicately embroidered pillow cover with floral patterns.",
    longDescription: "This pillow cover features intricate hand embroidery with traditional floral patterns. Made from 100% cotton, it has a hidden zipper closure and fits standard 18\"x18\" pillow inserts. Each piece is unique and adds a touch of artisanal charm to your home décor.",
    imageUrl: "https://images.unsplash.com/photo-1616627052149-22c4f8a6a5cb?auto=format&fit=crop&q=80",
    category: "Home",
    featured: false
  },
  {
    id: "4",
    name: "Wooden Serving Board",
    price: 52.00,
    description: "Hand-carved wooden serving board perfect for cheese and appetizers.",
    longDescription: "This serving board is handcrafted from a single piece of sustainable hardwood, showcasing the natural grain and beauty of the wood. Each board is carefully shaped, sanded to a smooth finish, and treated with food-safe oil. Ideal for serving cheese, charcuterie, or as a decorative piece.",
    imageUrl: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80",
    category: "Kitchen",
    featured: true
  },
  {
    id: "5",
    name: "Hand-knitted Scarf",
    price: 38.75,
    description: "Soft and warm scarf knitted with premium wool blend yarn.",
    longDescription: "This luxurious scarf is hand-knitted using a premium blend of wool and acrylic yarn, making it both warm and easy to care for. The intricate stitch pattern adds texture and visual interest. At approximately 6 feet in length, it provides ample warmth and can be styled in multiple ways.",
    imageUrl: "https://images.unsplash.com/photo-1607857530494-e67ccf99b0dc?auto=format&fit=crop&q=80",
    category: "Apparel",
    featured: false
  },
  {
    id: "6",
    name: "Handmade Soap Collection",
    price: 24.99,
    description: "Set of 3 natural handmade soaps with essential oils.",
    longDescription: "Our artisanal soap collection features three unique bars made with all-natural ingredients and pure essential oils. Free from harsh chemicals and artificial fragrances, these soaps are gentle on the skin while providing a luxurious lather. Each set includes lavender, citrus, and peppermint varieties.",
    imageUrl: "https://images.unsplash.com/photo-1607006483247-b810c24fab26?auto=format&fit=crop&q=80",
    category: "Bath",
    featured: false
  },
];
