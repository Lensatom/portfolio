import { Typography } from "../../../components"
import { GetYears } from "../../../helpers/GetYears";

type SkillType = {
  skill: string;
  startYear: number;
  description: string;
}

const Skill = (props:SkillType) => {

  const { skill, description, startYear } = props;

  return (
    <div>
      <div className="flex flex-wrap items-end gap-x-2">
        <Typography mode="dark" variant="subhead">{skill}</Typography>
        <Typography mode="dark" variant="subbody" className="bg-gray-500/75 px-2 py-1 rounded-full">{GetYears(startYear)}+ years</Typography>
      </div>
      <Typography mode="dark" variant="body">{description}</Typography>
    </div>
  )
}

export default Skill