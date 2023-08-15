import { Container, Typography } from "../../components"
import Education from "./components/Education"
import WorkExperience from "./components/WorkExperience"
import { EducationData } from "./data/EducationData"
import { ExperienceData } from "./data/ExperienceData"


const Experience = () => {
  return (
    <>
      <Container className="py-10 flex flex-col gap-5">
        <Typography variant="head">Work Experience</Typography>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {ExperienceData.map((experience) => {
            return (
              <WorkExperience
                duration={experience.duration}
                position={experience.position}
                company={experience.company}
                description={experience.description}
              />
            )
          })}
        </div>
      </Container>
      <Container className="py-10 flex flex-col gap-5">
        <Typography variant="head">Education</Typography>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {EducationData.map((education) => {
            return (
              <Education
                duration={education.duration}
                degree={education.degree}
                school={education.school}
                description={education.description}
              />
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default Experience