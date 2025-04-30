
import React from 'react';

const AdminDashboardPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-medium mb-2">Products</h2>
          <p className="text-3xl font-bold">6</p>
          <p className="text-muted-foreground text-sm mt-2">Total products in store</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-medium mb-2">Blog Posts</h2>
          <p className="text-3xl font-bold">3</p>
          <p className="text-muted-foreground text-sm mt-2">Published articles</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-medium mb-2">Messages</h2>
          <p className="text-3xl font-bold">0</p>
          <p className="text-muted-foreground text-sm mt-2">Unread contact messages</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-bold mb-4">Quick Start Guide</h2>
        <ul className="space-y-4">
          <li className="flex">
            <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-4">
              1
            </div>
            <div>
              <h3 className="font-medium">Manage Products</h3>
              <p className="text-muted-foreground">Add, edit, or remove products from your store.</p>
            </div>
          </li>
          <li className="flex">
            <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-4">
              2
            </div>
            <div>
              <h3 className="font-medium">Write Blog Posts</h3>
              <p className="text-muted-foreground">Share your expertise and attract customers with engaging content.</p>
            </div>
          </li>
          <li className="flex">
            <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-4">
              3
            </div>
            <div>
              <h3 className="font-medium">Respond to Messages</h3>
              <p className="text-muted-foreground">Stay connected with your customers by answering their inquiries.</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4">System Status</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Website</span>
            <span className="text-green-500 font-medium">Online</span>
          </div>
          <div className="flex justify-between">
            <span>Admin Panel</span>
            <span className="text-green-500 font-medium">Online</span>
          </div>
          <div className="flex justify-between">
            <span>Database</span>
            <span className="text-green-500 font-medium">Connected</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
