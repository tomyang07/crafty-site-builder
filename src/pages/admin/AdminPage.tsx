
import React from 'react';
import AdminLogin from '@/components/AdminLogin';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline">
            &larr; Back to Site
          </Link>
        </div>
        
        <AdminLogin />
      </div>
    </div>
  );
};

export default AdminPage;
