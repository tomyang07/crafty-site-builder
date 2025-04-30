
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
}

const BlogCard = ({ id, title, excerpt, imageUrl, date, author }: BlogCardProps) => {
  const formattedDate = formatDistanceToNow(new Date(date), { addSuffix: true });
  
  return (
    <Link to={`/blog/${id}`}>
      <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
        <div className="overflow-hidden h-48">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105" 
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-medium text-lg line-clamp-2">{title}</h3>
          <div className="flex items-center text-muted-foreground text-xs mt-2">
            <span>{author}</span>
            <span className="mx-2">•</span>
            <span>{formattedDate}</span>
          </div>
          <p className="text-muted-foreground text-sm mt-3 line-clamp-3 flex-1">{excerpt}</p>
          <div className="mt-4">
            <span className="text-primary font-medium text-sm">Read more</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
