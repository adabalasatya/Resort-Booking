import React from 'react';
import DBConnection from './utils/config/db';
import { auth } from './auth';
import { redirect } from 'next/navigation';
import UserNavigation from './components/UserNavigation';
import AdminPage from './admin/page';
import ProductCollection from './components/ProductCollection';
import Footer from './components/Footer';
import Image from 'next/image';

const HomePage = async () => {
  const session = await auth();
  await DBConnection();

  if (!session) {
    redirect('/login');
  }

  const userName = session.username;

  return (
    <div className="homePage">
      {session.role === 'user' && (
        <>
          <div className="heroSection">
            {/* Glass Navigation */}
            <UserNavigation userName={userName} />
            {/* Hero Content */}
            <div className="heroContent">
              <h1>Dream Resort</h1>
              <h2>Hyderabad, India</h2>
              <p>
              Escape to a world of relaxation and fun. Our resort offers beautiful views, top-class facilities, and services tailored just for you.
              From water sports to nature walks and cultural tours, there’s something for everyone. Booking is easy, and we offer great deals to make your dream vacation come true.
              </p>
              <button className="ctaButton">Explore More</button>
            </div>
           
            <Image 
  src="/banner.jpg" 
  alt="banner" 
  width={1920} 
  height={1080} 
  className="bannerImage" 
/>

          </div>
          {/* Product Section */}
          <h1 align="center">Select your Stay</h1>
          <ProductCollection />
          <Footer/>
        </>
      )}
      {session.role === 'admin' && <AdminPage />}
    </div>
  );
};

export default HomePage;
