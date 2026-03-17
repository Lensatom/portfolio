import ExperienceImage from "../../assets/experience.jpg"
import { Container, Line, Typography } from "../../components"
import WorkExperience from "./components/WorkExperience"
import ExperienceData from "./data/ExperienceData.json"

const Experience = () => {
  return (
    <>
      <Container className="pt-16 lg:pt-24 pb-10 flex flex-col !gap-6">
        <div className="h-24 lg:h-44 mt-4 w-full overflow-hidden flex items-center">
          <img src={ExperienceImage} alt="contact image" />
        </div>
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
    </>
  )
}

export default Experience