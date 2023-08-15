import { ButtonType } from "./ButtonType"

const Button = ({ children, className, type, variant, ...rest }:ButtonType) => {

  const styles = {
    blue: "bg-primary text-white",
    gray: "bg-gray-200 text-gray-700"
  }

  return (
    <button type={type} {...rest} className={`${className} ${styles[variant]} font-semibold text-xs py-3 px-8 rounded-md`}>{children}</button>
  )
}

export default Button