
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container-custom py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
            <p className="text-muted-foreground mb-8">
              Have questions? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <ContactForm />
              </div>
              
              <div>
                <div className="bg-secondary p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-primary">hello@craftyhaven.com</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p>+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <address className="not-italic">
                        123 Craft Street<br />
                        Artisan City, AC 12345
                      </address>
                    </div>
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p>Monday - Friday: 9am - 5pm</p>
                      <p>Saturday: 10am - 4pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
