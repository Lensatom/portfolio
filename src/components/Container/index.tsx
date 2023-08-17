import { useContext } from 'react'
import { ContainerType } from "./ContainerType"
import { ModeContext } from '../../context/ModeContext';

const Container = (props:ContainerType) => {

  const { mode } = useContext(ModeContext)

  const {
    children,
    className
  } = props;

  return (
    <div className={`${className} ${mode === "dark" ? "bg-primary/10" : "bg-gray-100"} px-3 md:px-8 lg:px-44 gap-10`}>{children}</div>
  )
}

export default Container