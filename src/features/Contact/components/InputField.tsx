import { useContext } from 'react'
import { ModeContext } from '../../../context/ModeContext'
import { Typography } from '../../../components'

interface InputFieldType extends React.ComponentPropsWithoutRef<"input"> {
  label: string
  className?: string
}

const InputField = ({label, className, ...rest}:InputFieldType) => {

  const { mode } = useContext(ModeContext)

  return (
    <div className={`${className} flex flex-col gap-1`}>
      <label className="text-primary text-sm font-medium">
      <Typography variant="body">
        {label}
      </Typography>
      </label>
      <input
        required
        className={`${mode === "dark" ? "text-gray-300 border-primary/30" : "text-gray-700"} w-full border-2 p-[8px] focus:outline-primary rounded-md bg-transparent text-xs`}
        {...rest}
      />
    </div>
  )
}

export default InputField