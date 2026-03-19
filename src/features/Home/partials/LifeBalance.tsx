import { useEffect, useRef, useState } from 'react'
import LeisureImage from '../../../assets/leisure.jpg'
import { Typography } from "../../../components"

function LifeBalance() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    let rafId = 0
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const updateParallax = () => {
      if (reduceMotion) {
        setParallaxY(0)
        return
      }

      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height)
      const normalized = Math.max(0, Math.min(1, progress))

      // eliberately stronger parallax so movement is clearly noticeable.
      const maxShift = 140
      setParallaxY((normalized - 0.5) * maxShift)
    }

    const onScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        rafId = 0
        updateParallax()
      })
    }

    updateParallax()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div className="h-28" />
      <div ref={sectionRef} className="relative overflow-hidden">
        <img
          src={LeisureImage}
          alt="Leisure background image"
          className="absolute inset-0 z-0 h-full w-full object-cover will-change-transform transition-transform duration-200 ease-out"
          style={{ transform: `translate3d(0, ${parallaxY}px, 0) scale(1.16)` }}
        />

        <div className="relative min-h-[420px] lg:min-h-[480px]">
          <svg
            className="absolute inset-0 z-10 h-full w-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            shapeRendering="geometricPrecision"
          >
            <defs>
              <mask id="maskRight">
                <rect x="0" y="0" width="100" height="100" fill="white" />
                <rect x="52" y="10" width="40" height="80" fill="black" />
              </mask>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="rgb(255, 255, 255)" mask="url(#maskRight)" />
          </svg>

          <div className="absolute inset-0 z-20 px-3 md:px-8 lg:px-44 py-10 md:py-16 flex items-center">
            <div className="w-full lg:w-[48%] grid grid-cols-2 gap-2">
              <div>
                <Typography variant="head">When I'm not coding</Typography>
              </div>
              <div className="flex flex-col gap-1 col-span-2">
                <Typography variant="subhead" className="!font-bold">Filmmaking</Typography>
                <Typography variant="body">
                  I create short films which I post <br />
                  for my audience on instagram and TikTok
                </Typography>
              </div>
              <div className="flex flex-col gap-1 col-span-2">
                <Typography variant="subhead" className="!font-bold">Writing</Typography>
                <Typography variant="body">
                  I write articles on my blog about tech, <br />
                  career and personal development.
                </Typography>
              </div>
              <div className="flex flex-col gap-1 col-span-2">
                <Typography variant="subhead" className="!font-bold">Running</Typography>
                <Typography variant="body">
                  I enjoy running as a therapeutic way of <br />
                  easing stress and keeping fit
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[460px] lg:min-h-[520px]">
          <svg
            className="absolute inset-0 z-10 h-full w-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            shapeRendering="geometricPrecision"
          >
            <defs>
              <mask id="maskLeft">
                <rect x="0" y="0" width="100" height="100" fill="white" />
                <rect x="8" y="10" width="40" height="75" fill="black" />
              </mask>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="rgb(255, 255, 255)" mask="url(#maskLeft)" />
          </svg>

          <div className="absolute inset-0 z-20 px-3 md:px-8 lg:px-44 py-10 md:py-16 flex items-center justify-end">
            <div className="w-full lg:w-[48%]">
              <Typography variant="head">Goals</Typography>
              <Typography variant="body" className="text-gray-300 mt-6">
                Tech as a passion and means of making a living is a way for me to achieve my
                life-long goal of making technology education available to enthusiasts
                especially in Africa. When I started tech, it was not too easy for me to plant my feet in it
                and I am aware this problem is still very much in the society. I am passionate
                about creating innovations and avenues to solve it. I have started by anchoring
                over 800 students in my school into tech with an online community, Bugger-Debuggers which I created to ease
                the complexities of a tech course, and I hope to do more.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="h-28" />
    </>
  )
}

export default LifeBalance