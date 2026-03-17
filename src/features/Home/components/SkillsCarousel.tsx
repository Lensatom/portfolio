import { IconType } from "react-icons"
import {
  SiAmazonaws,
  SiCss3,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
type BrandSkill = {
  name: string
  icon: IconType
  color: string
}

const SKILLS: BrandSkill[] = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#111111" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Expo", icon: SiExpo, color: "#1C2024" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#4B5563" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
]

const LOOPED_SKILLS = [...SKILLS, ...SKILLS]

const SkillsCarousel = () => {
  return (
    <div className="skills-marquee" aria-label="Infinite skills carousel">
      <div className="skills-marquee-track">
        {LOOPED_SKILLS.map((skill, index) => {
          const Icon = skill.icon
          return (
            <div
              className="skills-marquee-item"
              key={`${skill.name}-${index}`}
              style={{ borderColor: `${skill.color}40` }}
            >
              <Icon size={20} style={{ color: skill.color }} aria-hidden="true" />
              <span style={{ color: skill.color }} className="!text-xs">{skill.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsCarousel
