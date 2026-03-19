import { FaCopyright } from 'react-icons/fa'
import { Container, Line, Typography } from '..'
import { RESUME_LINK } from '../../constants'

const Footer = () => {
  return (
    <Container id="footer" className='relative overflow-hidden !bg-gray-700 grid grid-cols-2 lg:grid-cols-4 !gap-10 py-10 lg:py-24 lg:pb-44'>
      <div className='flex flex-col gap-3 z-10'>
        <div className='flex items-baseline gap-1'>
          <Typography mode="dark" variant='subhead' className='!bold flex'>
            Ayomide
          </Typography>
          <div className='w-1 h-1 bg-red-500 font-bold rounded-full'></div>
        </div>
        <Line mode="dark" />
        <Typography mode="dark" variant="body">
          Software Engineer <br />
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
      <div className='flex flex-col gap-3 z-10'>
        <Typography mode="dark" variant='subhead' className='!bold'>Pages</Typography>
        <Line />
        <Typography mode="dark" variant="body">
          <a href="#hero">Home</a>
        </Typography>
        <Typography mode="dark" variant="body">
          <a href="#experiences">Experience</a>
        </Typography>
        <Typography mode="dark" variant="body">
          <a href="#projects">Projects</a>
        </Typography>
        <Typography mode="dark" variant="body">
          <a href="#blogs">Blogs</a>
        </Typography>
        <Typography mode="dark" variant="body">
          <a href="#footer">Contact</a>
        </Typography>
        <Typography mode="dark" variant="body">
          <a href={RESUME_LINK} target='_blank'>Resume</a>
        </Typography>
      </div>
      <div className='flex flex-col gap-3 z-10'>
        <Typography mode="dark" variant='subhead' className='!bold'>Work contact</Typography>
        <Line />
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
      <div className='flex flex-col gap-3 z-10'>
        <Typography mode="dark" variant='subhead' className='!bold'>Socials</Typography>
        <Line />
        <Typography mode="dark" variant="body">
          <a href="https://twitter.com/Ayomide_Lens" target="_blank">X</a>
        </Typography>
        <Typography mode="dark" variant="body">
          <a href="https://www.instagram.com/lensatom/" target="_blank">Instagram</a>
        </Typography>
        <Typography mode="dark" variant="body">
          <a href="https://www.tiktok.com/@lensatom" target="_blank">TikTok</a>
        </Typography>
      </div>
      <span className='absolute -bottom-24 -right-[40%] text-[300px] font-extrabold text-transparent' style={{WebkitTextStroke: '2px rgba(255, 255, 255, 0.04)'}}>AYOMIDE</span>
    </Container>
  )
}

export default Footer