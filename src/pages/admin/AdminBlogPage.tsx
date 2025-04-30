
import React from 'react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

const AdminBlogPage = () => {
  const { toast } = useToast();
  
  const handleEdit = (id: string) => {
    toast({
      title: "Edit feature coming soon",
      description: `You'll be able to edit blog post #${id} in a future update.`,
    });
  };
  
  const handleDelete = (id: string) => {
    toast({
      title: "Delete feature coming soon",
      description: `You'll be able to delete blog post #${id} in a future update.`,
    });
  };
  
  const handleAddNew = () => {
    toast({
      title: "Add blog post feature coming soon",
      description: "You'll be able to add new blog posts in a future update.",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Blog Posts</h1>
        <Button onClick={handleAddNew}>Add New Post</Button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogPosts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium line-clamp-1">{post.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">{post.author}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">
                    {format(new Date(post.date), 'MMM d, yyyy')}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mr-2"
                    onClick={() => handleEdit(post.id)}
                  >
                    Edit
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-destructive hover:text-destructive"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBlogPage;
