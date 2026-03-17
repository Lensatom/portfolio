import { useState } from "react"
import { BsArrowLeft, BsArrowRight, BsBoxArrowUpRight } from "react-icons/bs"
import { Container, Typography } from "../../components"
import ProjectsImage from "../../assets/projects.jpg"
import ProjectsData from "./data/ProjectsData.json"

const Projects = () => {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  const navigate = (dir: 1 | -1) => {
    if (fading) return
    setFading(true)
    setTimeout(() => {
      setCurrent(i => (i + dir + ProjectsData.length) % ProjectsData.length)
      setFading(false)
    }, 250)
  }

  const project = ProjectsData[current]

  return (
    <>
      <Container className="pt-16 lg:pt-24 pb-6 flex flex-col gap-5">
        <div className="h-24 lg:h-44 mt-4 w-full overflow-hidden rounded-2xl">
          <img src={ProjectsImage} alt="projects" className="w-full h-full object-cover" />
        </div>
        <Typography variant="head">Projects</Typography>
      </Container>

      <div
        className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700"
        style={{ background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}bb 60%, ${project.color}66 100%)` }}
      >
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* Counter */}
        <div className="absolute top-8 right-6 lg:right-10 text-white/50 text-sm font-mono tracking-widest">
          {String(current + 1).padStart(2, "0")} / {String(ProjectsData.length).padStart(2, "0")}
        </div>

        {/* Card content */}
        <div
          className="text-center px-6 lg:px-24 max-w-3xl w-full transition-opacity duration-250"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-white/20 text-white text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
            {project.niche}
          </span>
          <h1 className="text-6xl lg:text-9xl font-black text-white leading-none mb-6 drop-shadow-lg">
            {project.name}
          </h1>
          <p className="text-white/75 text-base lg:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            {project.description}
          </p>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-sm font-semibold rounded-full hover:bg-white/90 transition-colors shadow-lg"
              style={{ color: project.color }}
            >
              View Project <BsBoxArrowUpRight size={12} />
            </a>
          ) : (
            <span className="inline-flex items-center px-8 py-3 bg-white/20 text-white/60 text-sm font-semibold rounded-full backdrop-blur-sm italic">
              Coming soon
            </span>
          )}
        </div>

        {/* Left arrow */}
        <button
          onClick={() => navigate(-1)}
          aria-label="Previous project"
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
        >
          <BsArrowLeft size={20} />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => navigate(1)}
          aria-label="Next project"
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
        >
          <BsArrowRight size={20} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {ProjectsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to project ${i + 1}`}
              className="h-2 rounded-full bg-white transition-all duration-300"
              style={{ width: i === current ? 24 : 8, opacity: i === current ? 1 : 0.4 }}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects