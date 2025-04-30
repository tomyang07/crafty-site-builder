
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdminLayout = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin');
    }
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[250px_1fr]">
      {/* Sidebar */}
      <div className="bg-secondary p-6">
        <div className="mb-8">
          <h1 className="text-xl font-bold">CraftyHaven Admin</h1>
        </div>
        
        <nav>
          <ul className="space-y-2">
            <li>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => navigate('/admin/dashboard')}
              >
                Dashboard
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => navigate('/admin/products')}
              >
                Products
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => navigate('/admin/blog')}
              >
                Blog Posts
              </Button>
            </li>
            <li>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => navigate('/')}
              >
                View Site
              </Button>
            </li>
            <li className="pt-4 border-t mt-4">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-destructive"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
