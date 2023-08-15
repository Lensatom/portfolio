import { Typography } from "../../../components";

type ContactTagType = {
  medium: string;
  link: string;
}

const ContactTag = (props:ContactTagType) => {
  return (
    <a href={props.link}>
      <Typography variant="body" className="px-4 py-[2px] bg-gray-100 !font-medium rounded-full">{props.medium}</Typography>
    </a>
  )
}

export default ContactTag