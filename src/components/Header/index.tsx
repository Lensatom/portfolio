import  { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Container } from "..";
import { FaSun, FaMoon, FaBars } from 'react-icons/fa'

const Header = () => {
  
  const [darkMode, setDarkMode] = useState(false)

  const changeMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <Container className="fixed z-99 w-full py-5 !bg-primary/90 backdrop-blur-sm flex items-center justify-between">
      <h3 className="text-sm font-semibold text-white">Ayomide <span className='text-xl text-red-500 font-bold'>.</span></h3>
      <nav className="hidden lg:flex items-center gap-8 text-sm text-white">
        <NavLink to='/portfolio'>Home</NavLink>
        <NavLink to='/portfolio/experience'>Experience</NavLink>
        <NavLink to='/portfolio/projects'>Projects</NavLink>
        <NavLink to='/portfolio/'>Blogs</NavLink>
        <NavLink to='/portfolio/contact'>Contact</NavLink>
        <NavLink to='/portfolio/'>CV</NavLink>
        <button onClick={changeMode} className='w-8 h-8 bg-slate-500 flex justify-center items-center rounded-full'>
          { darkMode ?
            <FaSun className="text-md" /> :
            <FaMoon className="text-xs" />
          }
        </button>
      </nav>
      <div className='flex lg:hidden items-center gap-5 text-sm text-slate-200'>
        <button onClick={changeMode} className='w-8 h-8 bg-slate-500 flex justify-center items-center rounded-full'>
          { darkMode ?
            <FaSun className="text-md" /> :
            <FaMoon className="text-xs" />
          }
        </button>
        <FaBars className="text-lg" />
      </div>
    </Container>
  )
}

export default Header