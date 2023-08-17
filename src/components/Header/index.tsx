import  { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { Container } from "..";
import { FaSun, FaMoon, FaBars } from 'react-icons/fa'
import { ModeContext } from '../../context/ModeContext';

const Header = () => {
  
  const { mode, setMode } = useContext(ModeContext)

  const changeMode = () => {
    if (mode === "light") {
      localStorage.setItem("mode", "dark")
      setMode("dark");
    } else {
      localStorage.setItem("mode", "light")
      setMode("light");
    }
  }

  return (
    <Container className="fixed z-[99] w-full py-5 !bg-primary/90 backdrop-blur-sm flex items-center justify-between">
      <h3 className="text-sm font-semibold text-white">Ayomide <span className='text-xl text-red-500 font-bold'>.</span></h3>
      <nav className="hidden lg:flex items-center gap-8 text-sm text-white">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/experience'>Experience</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/blogs'>Blogs</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <a href='https://drive.google.com/file/d/1ZaPWYHX4tH7JOXbouXCAlEEoqp0vM615/view?usp=sharing' target='_blank'>CV</a>
        <button onClick={changeMode} className='w-8 h-8 bg-slate-500 flex justify-center items-center rounded-full'>
          { mode === "dark" ?
            <FaSun className="text-md" /> :
            <FaMoon className="text-xs" />
          }
        </button>
      </nav>
      <div className='flex lg:hidden items-center gap-5 text-sm text-slate-200'>
        <button onClick={changeMode} className='w-8 h-8 bg-slate-500 flex justify-center items-center rounded-full'>
          { mode === "dark" ?
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