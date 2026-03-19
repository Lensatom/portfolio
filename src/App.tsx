import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Footer, Header, Line } from "./components";
import Home from './features/Home';

function App() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleHeaderVisibility = () => {
      const currentScrollY = window.scrollY;
      const hasMeaningfulScroll = Math.abs(currentScrollY - lastScrollY) > 8;

      if (!hasMeaningfulScroll) return;

      if (currentScrollY <= 10) {
        setShowHeader(true);
      } else {
        setShowHeader(currentScrollY < lastScrollY);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleHeaderVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleHeaderVisibility);
    };
  }, []);

  return (
      <div className={`bg-gray-50`}>
        <div className={`bg-gray-50 z-[99] w-full fixed transition-transform duration-300 ease-out ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
          <Header />
          <Line mode='light' />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
