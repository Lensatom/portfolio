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
        <Typography variant="subhead">{skill}</Typography>
        <Typography variant="subbody" className="bg-primary/20 px-2 py-1 rounded-full">{GetYears(startYear)}+ years</Typography>
      </div>
      <Typography variant="body">{description}</Typography>
    </div>
  )
}

export default Skill