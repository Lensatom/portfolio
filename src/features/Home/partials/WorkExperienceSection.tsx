import { Container, Line, Typography } from "../../../components"
import WorkExperience from "../components/WorkExperience"
import ExperienceData from "../data/ExperienceData.json"

function WorkExperienceSection() {
  return (
    <Container className="py-16 lg:py-44 flex flex-col !gap-6">
      <Typography variant="head">Work Experience</Typography>
      <Line />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {ExperienceData.map((experience) => {
          return (
            <WorkExperience
              key={`${experience.company}-${experience.duration}`}
              duration={experience.duration}
              position={experience.position}
              company={experience.company}
              description={experience.description}
              location={experience.location}
              technologies={experience.technologies}
              highlights={experience.highlights}
              logoURL={experience.logoURL}
              link={experience.link}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default WorkExperienceSection