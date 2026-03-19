import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Container, Typography } from "..";
import { RESUME_LINK } from '../../constants';
import More from './components/More';

const Header = () => {
  const [ moreStatus, setMoreStatus ] = useState(false);

  return (
    <>
      {moreStatus && <More closeMore={() => {setMoreStatus(false)}} />}
      <Container className="!bg-gray-50/80 w-full py-5 md:py-6 backdrop-blur-md flex items-center justify-between">
        <Typography variant="subhead" className='flex gap-1 items-baseline'>
          Ayomide
          <div className='w-1 h-1 bg-red-500 font-bold rounded-full'></div>
        </Typography>
        <nav className="hidden lg:flex items-center gap-8">
          <Typography variant="body">
            <a href='#hero'>Home</a>
          </Typography>
          <Typography variant="body">
            <a href='#experiences'>Experience</a>
          </Typography>
          <Typography variant="body">
            <a href='#projects'>Projects</a>
          </Typography>
          <Typography variant="body">
            <a href='#blogs'>Blogs</a>
          </Typography>
          <Typography variant="body">
            <a href='#footer'>Contact</a>
          </Typography>
          <Typography variant="body">
            <a href={RESUME_LINK} target='_blank'>Resume</a>
          </Typography>
        </nav>
        <div className='flex lg:hidden items-center gap-5 text-sm text-slate-200'>
          <Typography variant="subhead">
            { moreStatus === true ?
              <FaTimes className="text-xl" onClick={() => setMoreStatus(false)} /> :
              <FaBars className="text-xl" onClick={() => setMoreStatus(true)} />
            }
          </Typography>
        </div>
      </Container>
    </>
  )
}

export default Header