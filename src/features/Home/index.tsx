import { BlogsSection, Hero, LifeBalance, ProjectsSection, WorkExperienceSection } from "./partials"

const Home = () => {
  return (
    <>
      <Hero />
      <WorkExperienceSection />
      <ProjectsSection />
      <BlogsSection />
      <LifeBalance />  
    </>
  )
}

export default Home