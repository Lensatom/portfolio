import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header, Line } from "./components";
import { ModeContext } from './context/ModeContext';
import { Home } from "./features";

function App() {

  const currentMode = localStorage.getItem("mode") ?? "light";
  const { pathname } = useLocation();
  const [mode, setMode] = useState("dark");
  const [showHeader, setShowHeader] = useState(true);
  
  useEffect(() => {
    setMode(currentMode)
    window.scrollTo(0, 0)
  }, [pathname])

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
    <ModeContext.Provider value={{mode, setMode}}>
      <div className={`${mode === "dark" ? "bg-[hsl(200,30%,12%)]" : "bg-gray-50"}`}>
        <div className={`${mode === "dark" ? "bg-[#121212]" : "bg-gray-50"} z-[99] w-full fixed transition-transform duration-300 ease-out ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
          <Header />
          <Line />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </ModeContext.Provider>
  )
}

export default App
