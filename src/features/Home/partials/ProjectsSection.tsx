import { useState } from 'react'
import { BsArrowLeft, BsArrowRight, BsBoxArrowUpRight } from 'react-icons/bs'
import { Container, Typography } from "../../../components"
import ProjectsData from "../../projects/data/ProjectsData.json"

export function ProjectsSection() {
  
  const [projectCurrent, setProjectCurrent] = useState(0)
  const [projectFading, setProjectFading] = useState(false)

  const navigateProjects = (dir: 1 | -1) => {
    if (projectFading) return
    setProjectFading(true)
    setTimeout(() => {
      setProjectCurrent(i => (i + dir + ProjectsData.length) % ProjectsData.length)
      setProjectFading(false)
    }, 250)
  }

  const currentProject = ProjectsData[projectCurrent]

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target
    if (target instanceof Element && target.closest('a, button')) return
    navigateProjects(1)
  }

  const openProjectLink = (e: React.MouseEvent<HTMLButtonElement>, link: string) => {
    e.stopPropagation()
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <Container
      onClick={handleContainerClick}
      className="relative aspect-video lg:min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700 cursor-pointer"
      style={{ background: `linear-gradient(135deg, ${currentProject.color} 0%, ${currentProject.color}bb 60%, ${currentProject.color}66 100%)` }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="absolute top-6 left-8 w-full flex justify-between items-center pr-24 lg:top-8 lg:right-10 text-white/50 text-xs lg:text-sm font-mono tracking-widest">
        <Typography variant="head" className='text-white'>Personal Projects</Typography>
        {String(projectCurrent + 1).padStart(2, "0")} / {String(ProjectsData.length).padStart(2, "0")}
      </div>

      <div
        className="relative z-10 text-center px-6 lg:px-24 max-w-3xl w-full transition-opacity duration-250"
        style={{ opacity: projectFading ? 0 : 1 }}
      >
        <span className="inline-block px-4 py-1 mb-4 lg:mb-6 rounded-full bg-white/20 text-white text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
          {currentProject.niche}
        </span>
        <h2 className="text-4xl lg:text-8xl font-black text-white leading-none mb-4 lg:mb-6 drop-shadow-lg">
          {currentProject.name}
        </h2>
        <p className="text-white/75 text-sm lg:text-base max-w-xl mx-auto mb-6 lg:mb-10 leading-relaxed">
          {currentProject.description}
        </p>
        {currentProject.link ? (
          <button
            type="button"
            onClick={(e) => openProjectLink(e, currentProject.link)}
            className="inline-flex items-center gap-2 px-6 lg:px-8 py-2 lg:py-3 bg-white text-xs lg:text-sm font-semibold rounded-sm hover:bg-white/90 transition-colors shadow-lg"
            style={{ color: currentProject.color }}
          >
            View Project <BsBoxArrowUpRight size={12} />
          </button>
        ) : (
          <span className="inline-flex items-center px-6 lg:px-8 py-2 lg:py-3 bg-white/20 text-white/60 text-xs lg:text-sm font-semibold rounded-full backdrop-blur-sm italic">
            Coming soon
          </span>
        )}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation()
          navigateProjects(-1)
        }}
        aria-label="Previous project"
        className="absolute left-3 lg:left-8 top-1/2 -translate-y-1/2 size-14 lg:size-16 rounded-md bg-white/20 hover:bg-white/35 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
      >
        <BsArrowLeft size={34} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          navigateProjects(1)
        }}
        aria-label="Next project"
        className="absolute right-3 lg:right-8 top-1/2 -translate-y-1/2 size-14 lg:size-16 rounded-md bg-white/20 hover:bg-white/35 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
      >
        <BsArrowRight size={34} />
      </button>

      <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {ProjectsData.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation()
              setProjectCurrent(i)
            }}
            aria-label={`Go to project ${i + 1}`}
            className="h-2 rounded-full bg-white transition-all duration-300"
            style={{ width: i === projectCurrent ? 24 : 8, opacity: i === projectCurrent ? 1 : 0.4 }}
          />
        ))}
      </div>
    </Container>
  )
}