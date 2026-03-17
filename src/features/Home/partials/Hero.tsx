import { BsBoxArrowUpRight } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import AyomideImage from '../../../assets/ayomide.jpg'
import { Button, Container, Typography } from "../../../components"
import SkillsCarousel from "../components/SkillsCarousel"

function Hero() {
  return (
    <Container className="relative lg:min-h-screen py-24 box-content lg:py-0 lg:!pb-20 flex md:flex-row flex-col-reverse items-center justify-center">
      <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
        <Typography variant="subhead">Hi, I'm</Typography>
        <Typography variant="head">Ayomide Atayero,</Typography>
        <Typography variant="subhead" className="mt-1">A Software Engineer</Typography>
        <Typography variant="body" className="mt-2 lg:pr-24">
          I build full-stack applications that turn complex technical challenges into seamless, user-focused experiences.
          Passionate about problem-solving, I design systems that are reliable, scalable, and maintainable.
        </Typography>
        <div className="mt-5 flex gap-4">
          <NavLink to="/projects">
            <Button variant="blue" type="button" className="px-10">My Projects</Button>
          </NavLink>
          <a href='https://drive.google.com/file/d/1KqcCiw5OWvVuM2JwaIESOn9W9ZcCVbu9/view?usp=sharing' target='_blank'>
            <Button variant="gray" type="button" className="flex items-center gap-2">
              Resume
              <BsBoxArrowUpRight />
            </Button>
          </a>
        </div>
        <div className="grid grid-cols-2 items-end gap-4 mt-4">
          <div className="col-span-2 flex flex-col">
            <Typography variant="body" className="!font-bold">4+</Typography>
            <Typography variant="subbody">Years of <br className="hidden lg:block" /> experience</Typography>
          </div>
          <div className="flex flex-col">
            <Typography variant="body" className="!font-bold">GitHub</Typography>
            <Typography variant="subbody" className="leading-tight w-[fit-content] hover:underline">
              <a href="https://github.com/lensatom" target="_blank">https://github.com/lensatom</a>
            </Typography>
          </div>
          <div className="flex flex-col">
            <Typography variant="body" className="!font-semibold">Contact</Typography>
            <Typography variant="subbody" className="leading-tight w-[fit-content] hover:underline">
              <a href="mailto:atayerotommiwa@gmail.com" target="_blank">atayerotommiwa@gmail.com</a>
            </Typography>
          </div>
        </div>
      </div>
      <div className="w-full h-3/4 min-h-[300px] md:min-h-[420px] flex items-center overflow-hidden blob">
        <img src={AyomideImage} alt="skills" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <SkillsCarousel />
      </div>
    </Container>
  )
}

export default Hero