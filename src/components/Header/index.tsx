import  { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { Button, Container, Typography } from "..";
import { FaBars, FaTimes } from 'react-icons/fa'
import { ModeContext } from '../../context/ModeContext';
import { BsMoon, BsSun } from 'react-icons/bs';
import More from './components/More';

const Header = () => {
  
  const { pathname } = useLocation()
  const { mode, setMode } = useContext(ModeContext);
  const [ moreStatus, setMoreStatus ] = useState(false);

  useEffect(() => {
    setMoreStatus(false);
  }, [pathname])

  const changeMode = () => {
    if (mode === "light") {
      localStorage.setItem("mode", "dark")
      setMode("dark");
    } else {
      localStorage.setItem("mode", "light")
      setMode("light");
    }
  }

  const changeMoreStatus = () => {
    setMoreStatus(!moreStatus)
  }

  return (
    <>
      {moreStatus && <More closeMore={() => {setMoreStatus(false)}} />}
      <Container className="w-full py-5 md:py-6 bg-primary/10 backdrop-blur-sm flex items-center justify-between">
        <Typography variant="subhead" className='flex gap-1 items-baseline'>
          Ayomide
          <div className='w-1 h-1 bg-red-500 font-bold rounded-full'></div>
        </Typography>
        <nav className="hidden lg:flex items-center gap-8">
          <Typography variant="body">
            <NavLink to='/'>Home</NavLink>
          </Typography>
          <Typography variant="body">
            <NavLink to='/experience'>Experience</NavLink>
          </Typography>
          <Typography variant="body">
            <NavLink to='/projects'>Projects</NavLink>
          </Typography>
          <Typography variant="body">
            <NavLink to='/blogs'>Blogs</NavLink>
          </Typography>
          <Typography variant="body">
            <NavLink to='/contact'>Contact</NavLink>
          </Typography>
          <Typography variant="body">
            <a href='https://drive.google.com/file/d/1KqcCiw5OWvVuM2JwaIESOn9W9ZcCVbu9/view?usp=sharing' target='_blank'>Resume</a>
          </Typography>
          <Button type="button" variant="gray" onClick={changeMode} className='w-8 h-8 !p-0 !text-white !rounded-full flex justify-center items-center'>
            { mode === "dark" ?
              <BsSun className="text-md" /> :
              <BsMoon className="text-xs" />
            }
          </Button>
        </nav>
        <div className='flex lg:hidden items-center gap-5 text-sm text-slate-200'>
          <Button type="button" variant="gray" onClick={changeMode} className='w-8 h-8 !p-0 !text-white !rounded-full flex justify-center items-center'>
            { mode === "dark" ?
              <BsSun className="text-md" /> :
              <BsMoon className="text-xs" />
            }
          </Button>
          <Typography variant="subhead">
            { moreStatus === true ?
              <FaTimes className="text-xl" onClick={changeMoreStatus} /> :
              <FaBars className="text-xl" onClick={changeMoreStatus} />
            }
          </Typography>
        </div>
      </Container>
    </>
  )
}

export default Header