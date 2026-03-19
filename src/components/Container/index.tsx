import { ContainerType } from "./ContainerType";

const Container = (props: ContainerType) => {

  const {
    children,
    className,
    style,
    ...rest
  } = props;

  return (
    <div
      style={style}
      className={`${className} bg-gray-100 px-3 md:px-8 lg:px-44 gap-10`}
      {...rest}
    >{children}</div>
  )
}

export default Container