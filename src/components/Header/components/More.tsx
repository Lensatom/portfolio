import { useContext } from 'react'
import { Typography } from '../..'
import { NavLink } from 'react-router-dom'
import { ModeContext } from '../../../context/ModeContext'

const More = ({ closeMore }:any) => {

  const { mode } = useContext(ModeContext)

  return (
    <div onClick={closeMore} className={`fixed z-[99] bg-black/20 top-16 left-0 pr-2 w-full h-screen backdrop-blur-sm flex items-start justify-end`}>
      <nav onClick={(e) => e.stopPropagation()} className={`${mode === "dark" ? "bg-gray-600" : "bg-gray-200"} open mt-2 py-5 px-16 flex flex-col items-center rounded-md`}>
        <Typography variant="body" className='w-full py-1 text-center'>
          <NavLink to='/'>Home</NavLink>
        </Typography>
        <Typography variant="body" className='w-full py-1 text-center'>
          <NavLink to='/experience'>Experience</NavLink>
        </Typography>
        <Typography variant="body" className='w-full py-1 text-center'>
          <NavLink to='/projects'>Projects</NavLink>
        </Typography>
        <Typography variant="body" className='w-full py-1 text-center'>
          <NavLink to='/blogs'>Blogs</NavLink>
        </Typography>
        <Typography variant="body" className='w-full py-1 text-center'>
          <NavLink to='/contact'>Contact</NavLink>
        </Typography>
        <Typography variant="body" className='w-full py-1 text-center'>
          <a href='https://drive.google.com/file/d/1ZaPWYHX4tH7JOXbouXCAlEEoqp0vM615/view?usp=sharing' target='_blank'>Resume</a>
        </Typography>
      </nav>
    </div>
  )
}

export default More