import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Navbar from './component/navbar/navbar';
import Footer from './component/Footer/Footer';
import LoginPopup from './component/LoginPopup/LoginPopup';
import './App.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Lắng nghe sự kiện cuộn để hiển thị nút
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hàm cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        {/* Nút "Go to Top" */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="top-button"
          >
            ↑ Top
          </button>
        )}

        {/* Navbar */}
        <Navbar setShowLogin={setShowLogin} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
