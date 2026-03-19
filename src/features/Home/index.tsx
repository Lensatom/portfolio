import { Container, Typography } from '../../components'
import Blog from "../Blogs/components/Blog"
import BlogsData from '../blogs/data/BlogsData.json'
import { Hero, LifeBalance, ProjectsSection, WorkExperienceSection } from "./partials"

const Home = () => {
  return (
    <>
      <Hero />
      <WorkExperienceSection />
      <ProjectsSection />
      <Container className="pt-20 lg:py-24 pb-10 flex flex-col !gap-6">
        <Typography variant="head">Blogs</Typography>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {BlogsData.map((blog) => {
            return (
              <Blog
                title={blog.title}
                datePublished={blog.datePublished}
                body={blog.body}
                link={blog.link}
              />
            )
          })}
        </div>
      </Container>
      <LifeBalance />  
    </>
  )
}

export default Home