import LeisureImage from '../../assets/leisure.jpg'
import ProspectsImage from '../../assets/prospects.jpg'
import { Container, Line, Typography } from "../../components"
import { Hero, WorkExperienceSection } from "./partials"

const Home = () => {
  return (
    <>
      <Hero />
      <WorkExperienceSection />

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