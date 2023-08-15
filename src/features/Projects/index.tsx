import { Container, Typography } from "../../components"
import Project from "./components/Project"
import { ProjectsData } from "./data/ProjectsData"

const Projects = () => {
  return (
    <Container className="py-10 flex flex-col gap-5">
      <Typography variant="head">Projects</Typography>
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