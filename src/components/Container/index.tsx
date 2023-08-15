import { ContainerType } from "./ContainerType"

const Container = (props:ContainerType) => {

  const {
    children,
    className
  } = props;

  return (
    <div className={`${className} bg-gray-50 px-3 lg:px-44 gap-10`}>{children}</div>
  )
}

export default Container