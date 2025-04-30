
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';
import { formatDistanceToNow, format } from 'date-fns';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container-custom py-12">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the blog post you're looking for.</p>
            <Link to="/blog" className="text-primary hover:underline">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container-custom max-w-4xl py-12">
          <div className="mb-8">
            <Link to="/blog" className="text-primary hover:underline">
              &larr; Back to Blog
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center text-muted-foreground mb-8">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{formattedDate}</span>
          </div>
          
          <div className="mb-8">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="mt-8 pt-6 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="bg-secondary px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-16 bg-secondary rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            <p className="text-muted-foreground">
              Comments feature coming soon! Check back later to join the conversation.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
