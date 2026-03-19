import { BsBoxArrowUpRight } from "react-icons/bs";
import { Typography } from "../../../components";

type WorkExperienceType = {
  duration: string;
  company: string;
  description: string;
  position: string;
  location: string;
  technologies: string[];
  highlights: string[];
  logoURL: string;
  link: string;
}

const WorkExperience = (props:WorkExperienceType) => {
  const {
    duration,
    company,
    description,
    position,
    location,
    logoURL,
    link,
  } = props

  const initials = company
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
  
  return (
    <article className="h-full flex flex-col p-5 rounded-xl border border-primary/15 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {logoURL ? (
            <img src={logoURL} alt={`${company} logo`} className="size-10 rounded-md object-cover border border-primary/20" />
          ) : (
            <div className="size-10 rounded-md border border-primary/20 bg-primary/15 flex items-center justify-center">
              <Typography variant="subbody" className="!font-bold">{initials}</Typography>
            </div>
          )}
          <div>
            <Typography variant="subhead" className="!font-bold leading-tight">{company}</Typography>
            <Typography variant="subbody" className="opacity-80 !text-[11px]">{location}</Typography>
          </div>
        </div>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-[10px] px-3 py-1 rounded-full border border-primary/20 hover:border-primary/45 transition-colors flex items-center gap-1"
          >
            Visit
            <BsBoxArrowUpRight size={8} />
          </a>
        ) : (
          <span className="text-[10px] px-3 py-1 rounded-full border border-primary/10 flex items-center gap-1">
            Coming soon
          </span>
        )}
      </div>

      <div className="mt-3">
        <Typography variant="body" className="!font-semibold opacity-90 !text-xs">{position}</Typography>
        <Typography variant="subbody" className="opacity-80 !text-[10px]">{duration}</Typography>
      </div>

      <Typography variant="subbody" className="mt-3 !text-xs !text-gray-600/90">{description}</Typography>
    </article>
  )
}

export default WorkExperience