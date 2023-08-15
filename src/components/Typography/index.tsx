import { TypographyType } from "./TypographyType"

const Typography = ({className, children, variant, mode, ...rest}:TypographyType) => {

  console.log(variant)

  return (
    variant === "head" ?
    <h2 className={`${className} ${mode === "dark" ? "text-gray-300" : "text-primary"} text-3xl font-bold`} {...rest}>{children}</h2> :
    variant === "subhead" ?
    <h4 className={`${className} ${mode === "dark" ? "text-gray-300" : "text-primary"} text-md font-medium`} {...rest}>{children}</h4> :
    variant === "body" ?
    <p className={`${className} ${mode === "dark" ? "text-gray-400" : "text-gray-700"} text-sm`} {...rest}>{children}</p> :
    variant === "subbody" ?
    <p className={`${className} ${mode === "dark" ? "text-gray-400" : "text-gray-700"} text-xs`} {...rest}>{children}</p> :
    <></>
  )
}

export default Typography