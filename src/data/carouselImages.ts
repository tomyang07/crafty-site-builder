
export interface CarouselImage {
  url: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

export const homeCarouselImages: CarouselImage[] = [
  {
    url: "https://images.unsplash.com/photo-1556760890-774c1e47ecf1?auto=format&fit=crop&q=80",
    alt: "Handcrafted products",
    title: "Handcrafted with Love",
    subtitle: "Discover unique items made with passion and skill"
  },
  {
    url: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80",
    alt: "Artisan at work",
    title: "Artisanal Quality",
    subtitle: "Each piece tells a story of craftsmanship and dedication"
  },
  {
    url: "https://images.unsplash.com/photo-1616668983570-a971956d8928?auto=format&fit=crop&q=80",
    alt: "Craft supplies",
    title: "From Our Hands to Yours",
    subtitle: "Sustainable materials crafted into beautiful treasures"
  }
];
