import { Typography } from '../..'
import { RESUME_LINK } from '../../../constants'

const More = ({ closeMore }:any) => {
  return (
    <div onClick={closeMore} className={`fixed z-[99] bg-black/20 top-16 left-0 pr-2 w-full h-screen backdrop-blur-sm flex items-start justify-end`}>
      <nav onClick={(e) => e.stopPropagation()} className={`bg-gray-200 open mt-2 py-5 px-16 flex flex-col items-center rounded-md`}>
        <Typography variant="body" className='w-full py-1 text-center'>
          <a href='#hero'>Home</a>
        </Typography>
        <Typography variant="body" className='w-full py-1 text-center'>
          <a href='#experiences'>Experience</a>
        </Typography>
        <Typography variant="body" className='w-full py-1 text-center'>
          <a href='#projects'>Projects</a>
        </Typography>
        <Typography variant="body" className='w-full py-1 text-center'>
          <a href='#blogs'>Blogs</a>
        </Typography>
        <Typography variant="body" className='w-full py-1 text-center'>
          <a href='#footer'>Contact</a>
        </Typography>
        <Typography variant="body" className='w-full py-1 text-center'>
          <a href={RESUME_LINK} target='_blank'>Resume</a>
        </Typography>
      </nav>
    </div>
  )
}

export default More