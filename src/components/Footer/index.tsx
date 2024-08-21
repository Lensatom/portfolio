import { FaCopyright } from 'react-icons/fa'
import { Container, Typography } from '..'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <Container className='!bg-primary/30 grid grid-cols-2 lg:grid-cols-4 !gap-10 py-10 lg:py-24'>
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
        <Typography mode="dark" variant="body">
          <a href="mailto:atayerotommiw@gmail.com" target="_blank">atayerotommiwa@gmail.com</a>
        </Typography>
        <Typography mode="dark" variant="body" className='lg:hidden'>
          <a href="tel:+2349136852885" target="_blank">+234-913-6852-885</a>
        </Typography>
        <Typography mode="dark" variant="body" className='hidden lg:block'>
          +234-913-6852-885
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
          <a href='https://drive.google.com/file/d/1ZaPWYHX4tH7JOXbouXCAlEEoqp0vM615/view?usp=sharing' target='_blank'>Resume</a>
        </Typography>
      </div>
      <div className='flex flex-col gap-3'>
        <Typography mode="dark" variant='subhead' className='!bold'>Work contact</Typography>
        <div className='bg-gray-500 h-[1px] w-full' />
        <Typography mode="dark" variant="body">
          <a href="https://wa.me/+2349136852885" target="_blank">WhatsApp</a>
        </Typography>
        <Typography mode="dark" variant="body">
          <a href="https://www.linkedin.com/in/lensatom" target="_blank">LinkedIn</a>
        </Typography>
        <Typography mode="dark" variant="body">
          <a href="https://github.com/lensatom" target="_blank">GitHub</a>
        </Typography>
      </div>
      <div className='flex flex-col gap-3'>
        <Typography mode="dark" variant='subhead' className='!bold'>Social life</Typography>
        <div className='bg-gray-500 h-[1px] w-full' />
        <Typography mode="dark" variant="body">
          <a href="https://twitter.com/Ayomide_Lens" target="_blank">X (Formerly Twitter)</a>
        </Typography>
        <Typography mode="dark" variant="body">
          <a href="https://www.instagram.com/lensatom/" target="_blank">Instagram</a>
        </Typography>
        <Typography mode="dark" variant="body">
          <a href="https://www.tiktok.com/@lensatom" target="_blank">TikTok</a>
        </Typography>
      </div>
    </Container>
  )
}

export default Footer