import { BsBoxArrowUpRight } from "react-icons/bs"
import { Button, Container, Typography } from "../../components"
import SkillsImage from '../../assets/skills.jpg'
import LeisureImage from '../../assets/leisure.jpg'
import ProspectsImage from '../../assets/prospects.jpg'
import { SkillsData } from "./data/SkillsData"
import Skill from "./components/Skill"

const Home = () => {
  return (
    <>
      <Container className="lg:h-screen py-10 lg:py-0 flex md:flex-row flex-col-reverse items-center justify-between">
        <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
          <Typography variant="subhead">Hi, I'm</Typography>
          <Typography variant="head">Ayomide Atayero,</Typography>
          <Typography variant="subhead" className="mt-1">A Frontend Engineer</Typography>
          <Typography variant="body" className="mt-2">
            I engineer client-side web applications to ensure optimum user experience
            as well as speed and intended functionalities. I also build fullstack applications
            using serverless technology such as Firebase. 
          </Typography>
          <div className="mt-5 flex gap-4">
            <Button variant="blue" type="button" className="px-10">Projects</Button>
            <Button variant="gray" type="button" className="flex items-center gap-2 font-normal">
              View CV
              <BsBoxArrowUpRight />
            </Button>
          </div>
          <div className="grid grid-cols-2 items-end gap-4 mt-4">
            <div className="col-span-2 flex flex-col">
              <Typography variant="body" className="!font-bold">3+</Typography>
              <Typography variant="subbody">Years of <br className="hidden lg:block" /> experience</Typography>
            </div>
            <div className="flex flex-col">
              <Typography variant="body" className="!font-bold">GitHub</Typography>
              <Typography variant="subbody" className="leading-tight w-[fit-content] hover:underline">
                <a href="https://github.com/lensatom">https://github.com/lensatom</a>
              </Typography>
            </div>
            <div className="flex flex-col">
              <Typography variant="body" className="!font-bold">Contact</Typography>
              <Typography variant="subbody" className="leading-tight w-[fit-content] hover:underline">
                <a href="">atayerotommiwa@gmail.com</a>
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-center">
        </div>
      </Container>
      <Container className="lg:h-screen !bg-primary/90 !text-white py-12 flex lg:flex-row flex-col items-start justify-between">
        <div className="w-full">
          <Typography mode="dark" variant="subhead">Some of my</Typography>
          <Typography mode="dark" variant="head">Stack Skills</Typography>
          <img src={SkillsImage} alt="skills" className="mt-8 rounded-lg" />
        </div>
        <div className="w-full h-full grid grid-cols-2 grid-rows-6 gap-4">
          {SkillsData.map((skill) => {
            return (
              <Skill
                skill={skill.skill}
                startYear={skill.startYear}
                description={skill.description}
              />
            )
          })}
        </div>
      </Container>
      <Container className="!px-0 w-full overflow-x-scroll md:overflow-x-hidden">
        <div className="bg-primary/80 w-[200%] md:w-full px-5 py-6 flex items-center justify-between">
          <Typography mode="dark" variant="body" className="w-full py-1 border-x-[1px] border-primary/50 text-gray-200 flex justify-center items-center">Firebase</Typography>
          <Typography mode="dark" variant="body" className="w-full py-1 border-x-[1px] border-primary/50 text-gray-200 flex justify-center items-center">Python</Typography>
          <Typography mode="dark" variant="body" className="w-full py-1 border-x-[1px] border-primary/50 text-gray-200 flex justify-center items-center">C++</Typography>
          <Typography mode="dark" variant="body" className="w-full py-1 border-x-[1px] border-primary/50 text-gray-200 flex justify-center items-center">Numpy</Typography>
          <Typography mode="dark" variant="body" className="w-full py-1 border-x-[1px] border-primary/50 text-gray-200 flex justify-center items-center">Pandas</Typography>
          <Typography mode="dark" variant="body" className="w-full py-1 border-x-[1px] border-primary/50 text-gray-200 flex justify-center items-center">Matplotlib</Typography>
          <Typography mode="dark" variant="body" className="w-full py-1 border-x-[1px] border-primary/50 text-gray-200 flex justify-center items-center">SciKit Learn</Typography>
        </div>
      </Container>
      <Container className="py-10 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="w-full lg:w-[40%] grid grid-cols-2 gap-2">
          <div>
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
              I love crusing on my bicycle to clear <br />
              my head of stress
            </Typography>
          </div>
        </div>
        <div className="w-full lg:w-[60%]">
          <img src={LeisureImage} alt="Leisure image" className="mt-8 rounded-lg" />
        </div>
      </Container>
      <Container className="py-10 !bg-primary/90 flex flex-col !gap-8 items-center justify-between">
        <div className="w-full">
          <Typography mode="dark" variant="subhead">My future</Typography>
          <Typography mode="dark" variant="head">Prospects</Typography>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 !gap-10 items-center">
          <img src={ProspectsImage} alt="Prospects image" className="rounded-lg" />
          <div className="w-full">
            <Typography mode="dark" variant="body" className="text-gray-300">
              Tech as a passion and means of making a living is a way for me to achieve my
              life-long goal of making technology education available to enthusiats
              especially in Africa. When I started tech, it was not too easy for me to plant my feet in it
              and I am aware this problem is still very much in the society. I am passionate 
              about creating innovations and avenues to solve it. To show my zeal, I have started by anchoring
              over 800 students in my school into tech with an online community, Bugger-Debuggers which I created to ease
              the complexities of a tech course at my school.
            </Typography>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home