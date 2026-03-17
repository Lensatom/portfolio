import { useState } from 'react'
import { BsArrowLeft, BsArrowRight, BsBoxArrowUpRight } from 'react-icons/bs'
import LeisureImage from '../../assets/leisure.jpg'
import ProspectsImage from '../../assets/prospects.jpg'
import { Container, Line, Typography } from "../../components"
import { Hero, WorkExperienceSection } from "./partials"
import ProjectsData from "../projects/data/ProjectsData.json"
import ProjectsImage from "../../assets/projects.jpg"

const Home = () => {
  const [projectCurrent, setProjectCurrent] = useState(0)
  const [projectFading, setProjectFading] = useState(false)

  const navigateProjects = (dir: 1 | -1) => {
    if (projectFading) return
    setProjectFading(true)
    setTimeout(() => {
      setProjectCurrent(i => (i + dir + ProjectsData.length) % ProjectsData.length)
      setProjectFading(false)
    }, 250)
  }

  const currentProject = ProjectsData[projectCurrent]
  return (
    <>
      <Hero />
      <WorkExperienceSection />

      <Container
        className="relative aspect-video lg:min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700"
        style={{ background: `linear-gradient(135deg, ${currentProject.color} 0%, ${currentProject.color}bb 60%, ${currentProject.color}66 100%)` }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="absolute top-6 left-8 w-full flex justify-between items-center pr-24 lg:top-8 lg:right-10 text-white/50 text-xs lg:text-sm font-mono tracking-widest">
          <Typography variant="head" className='text-white'>Personal Projects</Typography>
          {String(projectCurrent + 1).padStart(2, "0")} / {String(ProjectsData.length).padStart(2, "0")}
        </div>

        <div
          className="text-center px-6 lg:px-24 max-w-3xl w-full transition-opacity duration-250"
          style={{ opacity: projectFading ? 0 : 1 }}
        >
          <span className="inline-block px-4 py-1 mb-4 lg:mb-6 rounded-full bg-white/20 text-white text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
            {currentProject.niche}
          </span>
          <h2 className="text-4xl lg:text-8xl font-black text-white leading-none mb-4 lg:mb-6 drop-shadow-lg">
            {currentProject.name}
          </h2>
          <p className="text-white/75 text-sm lg:text-base max-w-xl mx-auto mb-6 lg:mb-10 leading-relaxed">
            {currentProject.description}
          </p>
          {currentProject.link ? (
            <a
              href={currentProject.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 lg:px-8 py-2 lg:py-3 bg-white text-xs lg:text-sm font-semibold rounded-full hover:bg-white/90 transition-colors shadow-lg"
              style={{ color: currentProject.color }}
            >
              View Project <BsBoxArrowUpRight size={12} />
            </a>
          ) : (
            <span className="inline-flex items-center px-6 lg:px-8 py-2 lg:py-3 bg-white/20 text-white/60 text-xs lg:text-sm font-semibold rounded-full backdrop-blur-sm italic">
              Coming soon
            </span>
          )}
        </div>

        <button
          onClick={() => navigateProjects(-1)}
          aria-label="Previous project"
          className="absolute left-3 lg:left-8 top-1/2 -translate-y-1/2 size-14 lg:size-16 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
        >
          <BsArrowLeft size={34} />
        </button>

        <button
          onClick={() => navigateProjects(1)}
          aria-label="Next project"
          className="absolute right-3 lg:right-8 top-1/2 -translate-y-1/2 size-14 lg:size-16 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
        >
          <BsArrowRight size={34} />
        </button>

        <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {ProjectsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setProjectCurrent(i)}
              aria-label={`Go to project ${i + 1}`}
              className="h-2 rounded-full bg-white transition-all duration-300"
              style={{ width: i === projectCurrent ? 24 : 8, opacity: i === projectCurrent ? 1 : 0.4 }}
            />
          ))}
        </div>
      </Container>

      <Container className="!pt-10 lg:!pt-28">
        <Line />
        <div className="mt-2 md:mt-16 flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="w-full lg:w-[40%] grid grid-cols-2 gap-2">
            <div className="mt-5 md:mt-0">
              <Typography variant="subhead">During my</Typography>
              <Typography variant="head">Leisure Time</Typography>
            </div>
            <div className="flex flex-col gap-1 col-span-2 mt-5">
              <Typography variant="subhead" className="!font-bold">Content creation</Typography>
              <Typography variant="body">
                I create video contents which I post <br />
                for audience on instagram and TikTok
              </Typography>
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <Typography variant="subhead" className="!font-bold">Mobile photography</Typography>
              <Typography variant="body">
                I also like to take pictures of people, <br />
                the environment and random objects
              </Typography>
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <Typography variant="subhead" className="!font-bold">Cycling</Typography>
              <Typography variant="body">
                I enjoy cycling as a therapeutic way of <br />
                easing stress and relaxing
              </Typography>
            </div>
          </div>
          <div className="w-full lg:w-[60%]">
            <img src={LeisureImage} alt="Leisure image" className="mt-8 rounded-lg" />
          </div>
        </div>
      </Container>

      <Container className="py-10 lg:py-28 flex flex-col !gap-8 items-center justify-between">
        <Line />
        <div className="mt-2 lg:mt-16 w-full">
          <Typography variant="subhead">My future</Typography>
          <Typography variant="head">Prospects</Typography>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 !gap-5 lg:!gap-10 items-center">
          <img src={ProspectsImage} alt="Prospects image" className="rounded-lg" />
          <div className="w-full">
            <Typography variant="body" className="text-gray-300">
              Tech as a passion and means of making a living is a way for me to achieve my
              life-long goal of making technology education available to enthusiasts
              especially in Africa. When I started tech, it was not too easy for me to plant my feet in it
              and I am aware this problem is still very much in the society. I am passionate 
              about creating innovations and avenues to solve it. To show my zeal, I have started by anchoring
              over 800 students in my school into tech with an online community, Bugger-Debuggers which I created to ease
              the complexities of a tech course.
            </Typography>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home