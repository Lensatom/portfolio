import { Typography } from '..'
import LoaderAnimation from '../../assets/loader.gif'

const Loader = () => {
  return (
    <div className='bg-black w-full h-screen flex flex-col justify-center items-center'>
      <img src={LoaderAnimation} alt="skills" className="rounded-lg invert-[100%]" />
      <Typography mode="dark" variant="body" className='z-[99] mt-[-20px]'>A moment please</Typography>
    </div>
  )
}

export default Loader