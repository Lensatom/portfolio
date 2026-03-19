
const Line = ({ mode }: { mode?: string }) => {

  // const { mode: contextMode } = useContext(ModeContext)

  return (
    <div className={`${mode === "light" ? "bg-gray-300" : "bg-white/10"} h-[1px] w-full`} />
  )
}

export default Line