import { Typography } from "../../../components"

type WorkExperienceType = {
  duration: string;
  company: string;
  description: string;
  position: string;
}

const WorkExperience = (props:WorkExperienceType) => {
  
  return (
    <div className="flex flex-col py-24 px-5 bg-primary/10 rounded-md">
      <Typography variant="subhead" className="!font-bold">{props.company}</Typography>
      <Typography variant="body" className="!font-semibold opacity-80">{props.position}</Typography>
      <Typography variant="subbody" className="opacity-80">{props.duration}</Typography>
      <Typography variant="subbody" className="mt-4">{props.description}</Typography>
      <Typography variant="subbody" className="mt-4 flex items-center gap-2 underline">
      <a href='https://drive.google.com/file/d/1ZaPWYHX4tH7JOXbouXCAlEEoqp0vM615/view?usp=sharing' target='_blank'>View resume</a>
      </Typography>
    </div>
  )
}

export default WorkExperience