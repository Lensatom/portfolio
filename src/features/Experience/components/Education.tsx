import { Typography } from "../../../components"

type EducationType = {
  duration: string;
  school: string;
  description: string;
  degree: string;
}

const Education = (props:EducationType) => {

  return (
    <div className="flex flex-col py-24 px-5 bg-gray-100 rounded-md">
      <Typography variant="subhead" className="!font-bold">{props.school}</Typography>
      <Typography variant="body" className="!font-semibold opacity-80">{props.degree}</Typography>
      <Typography variant="subbody" className="opacity-80">{props.duration}</Typography>
      <Typography variant="subbody" className="mt-4">{props.description}</Typography>
      <Typography variant="subbody" className="mt-4 flex items-center gap-2 underline">
        View CV
      </Typography>
    </div>
  )
}

export default Education