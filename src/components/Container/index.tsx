import { useContext } from 'react'
import { ContainerType } from "./ContainerType"
import { ModeContext } from '../../context/ModeContext';

const Container = (props: ContainerType) => {

  const { mode } = useContext(ModeContext)

  const {
    children,
    className,
    style,
    ...rest
  } = props;

  return (
    <div
      style={style}
      className={`${className} ${mode === "dark" ? "bg-primary/10" : "bg-gray-100"} px-3 md:px-8 lg:px-44 gap-10`}
      {...rest}
    >{children}</div>
  )
}

export default Container