import { Typography } from "../../../components"

type ProjectType = {
  name: string;
  niche: string;
  description: string;
  link?: string;
}

const Project = (props:ProjectType) => {

  return (
    <div className="flex flex-col py-24 px-5 bg-gray-100 rounded-md">
      <Typography variant="subhead" className="!font-bold">{props.name}</Typography>
      <Typography variant="body" className="!font-semibold opacity-80">{props.niche}</Typography>
      <Typography variant="subbody" className="mt-4">{props.description}</Typography>
      {props.link && 
        <Typography variant="subbody" className="mt-4 flex items-center gap-2 underline">
          <a href={props.link} target="_blank">View project</a>
        </Typography>
      }
    </div>
  )
}

export default Project