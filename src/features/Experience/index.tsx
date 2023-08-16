import { Container, Line, Typography } from "../../components"
import Education from "./components/Education"
import WorkExperience from "./components/WorkExperience"
import { EducationData } from "./data/EducationData"
import { ExperienceData } from "./data/ExperienceData"
import ExperienceImage from "../../assets/experience.jpg"
import EducationImage from "../../assets/education.jpg"

const Experience = () => {
  return (
    <>
      <Container className="pb-10 flex flex-col !gap-6">
        <div className="h-36 lg:h-52 mt-4 w-full overflow-hidden flex items-center">
          <img src={ExperienceImage} alt="contact image" />
        </div>
        <Typography variant="head">Work Experience</Typography>
        <Line />
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
      <Container className="pb-24 flex flex-col !gap-8">
        <div className="h-36 lg:h-52 mt-4 w-full overflow-hidden flex items-center">
          <img src={EducationImage} alt="contact image" />
        </div>
        <Typography variant="head">Education</Typography>
        <Line />
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