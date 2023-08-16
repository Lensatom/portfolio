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
    <div className={`${className} ${mode === "dark" ? "bg-gray-500" : "bg-gray-50"} px-3 lg:px-44 gap-10`}>{children}</div>
  )
}

export default Container