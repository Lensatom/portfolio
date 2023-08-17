import { FaCopyright } from 'react-icons/fa'
import { Container, Typography } from '..'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <Container className='!bg-primary grid grid-cols-2 lg:grid-cols-4 !gap-10 py-10 lg:py-24'>
      <div className='flex flex-col gap-3'>
        <div className='flex items-baseline gap-1'>
          <Typography mode="dark" variant='subhead' className='!bold flex'>
            Ayomide
          </Typography>
          <div className='w-1 h-1 bg-red-500 font-bold rounded-full'></div>
        </div>
        <div className='bg-gray-500 h-[1px] w-full' />
        <Typography mode="dark" variant="body">
          Frontend engineer in Nigeria <br />
        </Typography>
        <Typography mode="dark" variant="body" className='flex items-center gap-2'>
          <FaCopyright />
          {new Date().getFullYear()}
        </Typography>
      </div>
      <div className='flex flex-col gap-3'>
        <Typography mode="dark" variant='subhead' className='!bold'>Pages</Typography>
        <div className='bg-gray-500 h-[1px] w-full' />
        <Typography mode="dark" variant="body">
          <NavLink to="/">Home</NavLink>
        </Typography>
        <Typography mode="dark" variant="body">
          <NavLink to="/experience">Experience</NavLink>
        </Typography>
        <Typography mode="dark" variant="body">
          <NavLink to="/projects">Projects</NavLink>
        </Typography>
        <Typography mode="dark" variant="body">
          <NavLink to="/blogs">Blogs</NavLink>
        </Typography>
        <Typography mode="dark" variant="body">
          <NavLink to="/contact">Contact</NavLink>
        </Typography>
        <Typography mode="dark" variant="body">
          <a href='https://drive.google.com/file/d/1ZaPWYHX4tH7JOXbouXCAlEEoqp0vM615/view?usp=sharing' target='_blank'>CV</a>
        </Typography>
      </div>
      <div className='flex flex-col gap-3'>
        <Typography mode="dark" variant='subhead' className='!bold'>Work contact</Typography>
        <div className='bg-gray-500 h-[1px] w-full' />
        <Typography mode="dark" variant="body">
          <a href="/experience">Gmail</a>
        </Typography>
        <Typography mode="dark" variant="body">
          <NavLink to="/projects">WhatsApp</NavLink>
        </Typography>
        <Typography mode="dark" variant="body">
          <NavLink to="/blogs">LinkedIn</NavLink>
        </Typography>
        <Typography mode="dark" variant="body">
          <NavLink to="/blogs">GitHub</NavLink>
        </Typography>
      </div>
      <div className='flex flex-col gap-3'>
        <Typography mode="dark" variant='subhead' className='!bold'>Social life</Typography>
        <div className='bg-gray-500 h-[1px] w-full' />
        <Typography mode="dark" variant="body">
          <NavLink to="/cv">X (Formerly Twitter)</NavLink>
        </Typography>
        <Typography mode="dark" variant="body">
          <NavLink to="/cv">Thread</NavLink>
        </Typography>
        <Typography mode="dark" variant="body">
          <NavLink to="/cv">Instagram</NavLink>
        </Typography>
        <Typography mode="dark" variant="body">
          <NavLink to="/cv">TikTok</NavLink>
        </Typography>
        <Typography mode="dark" variant="body">
          <NavLink to="/cv">YouTube</NavLink>
        </Typography>
      </div>
    </Container>
  )
}

export default Footer