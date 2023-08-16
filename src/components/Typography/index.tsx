import { useContext } from 'react'
import { TypographyType } from "./TypographyType"
import { ModeContext } from '../../context/ModeContext'

const Typography = ({className, children, variant, mode:customMode, ...rest}:TypographyType) => {

  const mode = customMode || useContext(ModeContext).mode

  return (
    variant === "head" ?
    <h2 className={`${className} ${mode === "dark" ? "text-gray-100" : "text-primary"} text-3xl font-bold`} {...rest}>{children}</h2> :
    variant === "subhead" ?
    <h4 className={`${className} ${mode === "dark" ? "text-gray-200" : "text-primary"} text-md font-medium`} {...rest}>{children}</h4> :
    variant === "body" ?
    <p className={`${className} ${mode === "dark" ? "text-gray-300" : "text-gray-700"} text-sm`} {...rest}>{children}</p> :
    variant === "subbody" ?
    <p className={`${className} ${mode === "dark" ? "text-gray-300" : "text-gray-700"} text-xs`} {...rest}>{children}</p> :
    <></>
  )
}

export default Typography