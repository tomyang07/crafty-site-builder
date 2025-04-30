
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { homeCarouselImages } from '@/data/carouselImages';
import { products } from '@/data/products';
import { blogPosts } from '@/data/blogPosts';

const Index = () => {
  const featuredProducts = products.filter(product => product.featured);
  const latestPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Carousel */}
        <section className="container-custom py-6">
          <Carousel images={homeCarouselImages} />
        </section>
        
        {/* Featured Products */}
        <section className="bg-secondary py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground mb-8">Handcrafted with love and attention to detail</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map(product => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  imageUrl={product.imageUrl}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/products">
                <Button>View All Products</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">About Our Craft</h2>
                <p className="text-muted-foreground mb-6">
                  Welcome to CraftyHaven, where passion meets craftsmanship. Every item in our collection is lovingly handcrafted using traditional techniques and sustainable materials.
                </p>
                <p className="text-muted-foreground mb-6">
                  Each piece tells a unique story and brings a touch of artisanal beauty to your everyday life. We believe in creating products that not only look beautiful but are also made to last.
                </p>
                <Link to="/contact">
                  <Button variant="outline">Get in Touch</Button>
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1560522602-400e3d33f912?auto=format&fit=crop&q=80" 
                  alt="Craftsperson at work" 
                  className="rounded-lg shadow-md w-full object-cover aspect-[4/3]" 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Latest Blog Posts */}
        <section className="bg-craft-50 py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-2">From Our Blog</h2>
            <p className="text-muted-foreground mb-8">Latest articles and crafting inspiration</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {latestPosts.map(post => (
                <Link key={post.id} to={`/blog/${post.id}`} className="group">
                  <div className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="overflow-hidden h-48">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                      <span className="text-primary font-medium">Read more</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/blog">
                <Button variant="outline">View All Posts</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-craft-800 text-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
              <p className="mb-6">Stay updated with our latest products, blog posts, and exclusive offers.</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-md flex-grow text-foreground" 
                  required 
                />
                <Button>Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
