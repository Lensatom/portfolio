import { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'

const Line = () => {

  const { mode } = useContext(ModeContext)

  return (
    <div className={`${mode === "light" ? "bg-gray-200" : "bg-primary/50"} h-[1px] w-full`} />
  )
}

export default Line