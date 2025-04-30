
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-craft-800">
            CraftyHaven
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link to="/" className="font-medium hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="font-medium hover:text-primary transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link to="/blog" className="font-medium hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/admin">
                <Button variant="outline" size="sm" className="ml-2">
                  Admin
                </Button>
              </Link>
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <ul className="flex flex-col items-center gap-4 py-6">
              <li>
                <Link 
                  to="/" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                >
                  <Button variant="outline" className="mt-2">
                    Admin
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
