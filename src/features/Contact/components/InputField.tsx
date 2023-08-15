
interface InputFieldType extends React.ComponentPropsWithoutRef<"input"> {
  label: string
  className?: string
}

const InputField = ({label, className, ...rest}:InputFieldType) => {

  return (
    <div className={`${className} flex flex-col gap-1`}>
      <label className="text-primary text-sm font-medium">{label}</label>
      <input
        required
        className={`w-full border-2 p-[6px] outline-primary rounded-md bg-transparent text-primary text-xs`}
        {...rest}
      />
    </div>
  )
}

export default InputField