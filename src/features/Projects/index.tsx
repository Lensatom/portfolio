import { Container, Line, Typography } from "../../components"
import Project from "./components/Project"
import { ProjectsData } from "./data/ProjectsData"
import ProjectsImage from "../../assets/projects.jpg"

const Projects = () => {
  return (
    <Container className="pb-10 flex flex-col gap-5">
      <div className="h-36 lg:h-52 mt-4 w-full overflow-hidden flex items-start">
        <img src={ProjectsImage} alt="contact image" />
      </div>
      <Typography variant="head">Projects</Typography>
      <Line />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {ProjectsData.map((project) => {
          return (
            <Project
              name={project.name}
              niche={project.niche}
              description={project.description}
              link={project.link}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default Projects