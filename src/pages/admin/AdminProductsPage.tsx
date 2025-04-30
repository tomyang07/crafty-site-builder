
import React from 'react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

const AdminProductsPage = () => {
  const { toast } = useToast();
  
  const handleEdit = (id: string) => {
    toast({
      title: "Edit feature coming soon",
      description: `You'll be able to edit product #${id} in a future update.`,
    });
  };
  
  const handleDelete = (id: string) => {
    toast({
      title: "Delete feature coming soon",
      description: `You'll be able to delete product #${id} in a future update.`,
    });
  };
  
  const handleAddNew = () => {
    toast({
      title: "Add product feature coming soon",
      description: "You'll be able to add new products in a future update.",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Products</h1>
        <Button onClick={handleAddNew}>Add New Product</Button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Featured
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="h-12 w-12 rounded-sm object-cover" 
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium">{product.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">${product.price.toFixed(2)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">{product.category}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">{product.featured ? 'Yes' : 'No'}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mr-2"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-destructive hover:text-destructive"
                    onClick={() => handleDelete(product.id)}
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

export default AdminProductsPage;
