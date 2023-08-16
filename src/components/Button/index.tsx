import { useContext } from 'react'
import { ButtonType } from "./ButtonType"
import { ModeContext } from '../../context/ModeContext'

const Button = ({ children, className, type, variant, ...rest }:ButtonType) => {

  const { mode } = useContext(ModeContext)

  const styles = {
    blue: `${mode === "dark" ? "bg-primary/70 text-gray-300" : "bg-primary text-white"}`,
    gray: `bg-primary/20 ${mode === "dark" ? "text-gray-300" : "text-gray-700"}`
  }

  return (
    <button type={type} {...rest} className={`${className} ${styles[variant]} font-semibold text-xs py-3 px-8 rounded-md`}>{children}</button>
  )
}

export default Button