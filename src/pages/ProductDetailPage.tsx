
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container-custom py-12">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
            <Link to="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container-custom py-12">
          <nav className="mb-6">
            <ol className="flex text-sm">
              <li>
                <Link to="/" className="hover:text-primary">Home</Link>
              </li>
              <li className="mx-2">/</li>
              <li>
                <Link to="/products" className="hover:text-primary">Products</Link>
              </li>
              <li className="mx-2">/</li>
              <li className="text-muted-foreground">{product.name}</li>
            </ol>
          </nav>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="overflow-hidden rounded-lg">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold text-primary mb-4">
                ${product.price.toFixed(2)}
              </p>
              
              <div className="mb-6 border-b pb-6">
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </div>
              
              <div className="mb-6">
                <h2 className="font-medium mb-2">Category</h2>
                <div className="inline-block bg-secondary px-3 py-1 rounded-full text-sm">
                  {product.category}
                </div>
              </div>
              
              <div className="space-y-4">
                <Button onClick={handleAddToCart} size="lg" className="w-full">
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Save for Later
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">Product Details</h2>
            <p className="text-muted-foreground whitespace-pre-line">
              {product.longDescription}
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
