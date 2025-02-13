import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img/1.jpg'; 


const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-red-700 p-4 flex justify-between items-center">
        <div className="text-xl font-bold">BUFFET บุฟเฟต์</div>
        <div className="text-sm">หน้าหลัก ☰</div>
      </nav>
      
      {/* Hero Section */}
      <div 
        className="relative text-center py-16 bg-cover bg-center" 
        style={{ backgroundImage: "url('/path-to-your-background.jpg')" }}
      >
        <h1 className="text-5xl font-extrabold text-red-500">BUFFET</h1>
        <h2 className="text-3xl font-bold text-orange-400">บุฟเฟต์</h2>
        <button className="mt-4 px-6 py-3 bg-gray-800 rounded-lg text-white shadow-lg">สั่งอาหาร</button>
      </div>
      
      {/* Promotions Section */}
      <div className="bg-gray-900 p-6 grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
           <center> <img src={img1} alt="Promotion" className="w-full rounded-lg" width={250} /></center>
            <p className="text-white text-lg mt-2 text-center font-bold">25% OFF - LIMITED OFFER</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
