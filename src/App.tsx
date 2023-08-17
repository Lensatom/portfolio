import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom"
import { Footer, Header, Line } from "./components"
import { Blogs, Contact, Experience, Home, Projects } from "./features"
import { ModeContext } from './context/ModeContext';

function App() {

  const currentMode = localStorage.getItem("mode");
  const { pathname } = useLocation();
  const [mode, setMode] = useState("light")
  
  useEffect(() => {
    if (currentMode === "dark") {
      setMode("dark")
    }
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <ModeContext.Provider value={{mode, setMode}}>
      <div className={`${mode === "dark" ? "bg-[#121212]" : "bg-gray-50"}`}>
        <div className={`${mode === "dark" ? "bg-[#121212]" : "bg-gray-50"} z-[99] w-full fixed`}>
          <Header />
          <Line />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className='bg-[#121212]'>
          <Footer />
        </div>
      </div>
    </ModeContext.Provider>
  )
}

export default App
