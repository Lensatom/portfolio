import { Typography } from "../../../components"

type SkillType = {
  skill: string;
  startYear: number;
  description: string;
}

const Skill = (props:SkillType) => {

  const { skill, description } = props;

  return (
    <div>
      <div className="flex flex-wrap items-end gap-x-2">
        <Typography variant="subhead">{skill}</Typography>
      </div>
      <Typography variant="body">{description}</Typography>
    </div>
  )
}

export default Skill