import { Typography } from "../../../components"

type WorkExperienceType = {
  title: string;
  body: string;
  datePublished: string;
  link: string;
}

const Blog = (props:WorkExperienceType) => {
  
  return (
    <div className="flex flex-col py-24 px-5 bg-primary/10 rounded-md">
      <Typography variant="subhead" className="!font-bold">{props.title}</Typography>
      <Typography variant="subbody" className="opacity-80">Published {props.datePublished}</Typography>
      <Typography variant="subbody" className="mt-4">{props.body}</Typography>
      <a href={props.link} target="_blank">
        <Typography variant="subbody" className="mt-4 flex items-center gap-2 underline">
          Read full article
        </Typography>
      </a>
    </div>
  )
}

export default Blog