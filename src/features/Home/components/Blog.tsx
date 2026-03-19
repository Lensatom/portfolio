import { Typography } from "../../../components"

type WorkExperienceType = {
  title: string;
  body: string;
  datePublished: string;
  link: string;
}

const Blog = (props:WorkExperienceType) => {
  
  return (
    <article className="flex flex-col gap-3 px-5 py-6 rounded-lg bg-white/40 border border-black/10 backdrop-blur-[1px]">
      <Typography variant="subbody" className="uppercase tracking-[0.12em] !text-[11px] !text-gray-500">
        Published {props.datePublished}
      </Typography>
      <Typography variant="subhead" className="!font-semibold !text-[1.08rem] leading-snug">
        {props.title}
      </Typography>
      <Typography variant="subbody" className="!text-sm !leading-6 !text-gray-600">
        {props.body}
      </Typography>
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-fit items-center border-b border-gray-400/60 pb-0.5 text-sm text-gray-700 transition-colors hover:text-gray-900"
      >
        Read article
      </a>
    </article>
  )
}

export default Blog