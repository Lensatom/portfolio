import { Button, Container, Typography } from "../../components"
import ContactImage from "../../assets/contact.jpg"
import InputField from "./components/InputField"
import { BsEyeFill } from "react-icons/bs"
import NigeriaImage from "../../assets/nigeria.png"

const Contact = () => {
  return (
    <Container className="pt-2 pb-24 flex flex-col !gap-8">
      <div className="h-36 lg:h-52 mt-4 w-full overflow-hidden flex items-center">
        <img src={ContactImage} alt="contact image" />
      </div>
      <Typography variant="head">Get in touch</Typography>
      <div className='bg-gray-200 h-[1px] w-full' />
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-5 lg:px-3 gap-12 items-center">
        <form className="grid grid-cols-2 gap-x-4 gap-y-5">
          <InputField label="Full name" className="col-span-2 lg:col-span-1" />
          <InputField type="email" label="Email Address" className="col-span-2 lg:col-span-1" />
          <InputField label="Subject" className="col-span-2" />
          <div className={`col-span-2 flex flex-col gap-1`}>
            <label className="text-sm font-medium">Message</label>
            <textarea
              required
              rows={6}
              className={`w-full border-2 p-[6px] outline-primary rounded-md bg-transparent text-primary text-xs`}
            />
          </div>
          <div className="block lg:hidden" />
          <Button variant="blue" type="button">Send</Button>
        </form>
        <div className="flex flex-col gap-6 h-full bg-white rounded-md shadow-lg shadow-gray-100">
          <div className="flex justify-center items-center h-44 lg:h-[40%] overflow-hidden bg-primary/10">
            <img src={NigeriaImage} alt="Leisure image" className="w-1/3" />
          </div>
          <div className="py-5 flex flex-col gap-5 px-5">
            <Typography variant="subhead" className="!font-bold">Lagos, Nigeria</Typography>
            <div className='bg-gray-300 h-[1px] w-full' />
            <div className="flex flex-col gap-2">
              <Typography variant="body">ayomidetommiwa@gmail.com</Typography>
              <Typography variant="subbody">+234-913-6852-885</Typography>
            </div>
            <BsEyeFill className="text-xs text-primary/90 ml-2" />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Contact