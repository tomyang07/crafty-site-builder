
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductCard = ({ id, name, price, description, imageUrl }: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`} className="product-card group">
      <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
        <div className="overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="product-image w-full" 
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-medium text-lg line-clamp-1">{name}</h3>
          <p className="text-primary font-semibold mt-1">${price.toFixed(2)}</p>
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2 flex-1">{description}</p>
          <div className="mt-4">
            <button className="w-full py-2 text-sm font-medium text-craft-800 border border-craft-300 rounded-md hover:bg-craft-50 transition">
              View Details
            </button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
