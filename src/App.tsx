import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom"
import { Footer, Header } from "./components"
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
      <div>
        <Header />
        <div className={`${mode === "dark" ? "bg-gray-500" : "bg-gray-50"} pt-16`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ModeContext.Provider>
  )
}

export default App
