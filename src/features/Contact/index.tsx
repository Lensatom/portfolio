import { useContext } from 'react'
import { Button, Container, Line, Typography } from "../../components"
import ContactImage from "../../assets/contact.jpg"
import InputField from "./components/InputField"
import { BsPinMap } from "react-icons/bs"
import { ModeContext } from '../../context/ModeContext'

const Contact = () => {

  const { mode } = useContext(ModeContext)

  return (
    <Container className="py-16 lg:py-24 flex flex-col !gap-6">
      <div className="h-24 lg:h-44 mt-4 w-full overflow-hidden flex items-center">
        <img src={ContactImage} alt="contact image" />
      </div>
      <Typography variant="head" className='md:pb-5'>Get in touch</Typography>
      <Line />
      <div className="md:py-12 grid grid-cols-1 lg:grid-cols-2 pt-5 gap-12 items-center">
        <form className="hidden grid-cols-2 gap-x-4 gap-y-5">
          <InputField label="Full name" className="col-span-2 lg:col-span-1" />
          <InputField type="email" label="Email Address" className="col-span-2 lg:col-span-1" />
          <InputField label="Subject" className="col-span-2" />
          <div className={`col-span-2 flex flex-col gap-1`}>
            <label className="text-sm font-medium">
              <Typography variant="body">
                Message
              </Typography>
            </label>
            <textarea
              required
              rows={6}
              className={`${mode === "dark" ? "text-gray-300 border-primary/30" : "text-gray-700"} w-full border-2 p-[6px] focus:outline-primary rounded-md bg-transparent text-xs`}
            />
          </div>
          <div className="hidden" />
          <Button variant="blue" type="button" className='col-span-2 py-4'>Send</Button>
        </form>
        <Container className="py-24 flex flex-col !px-0 h-full rounded-md">
          <div className="py-5 flex flex-col gap-5 px-5">
            <a href="https://www.google.com/maps/search/5,+Oyedeji,+Agbado+Ijaye,+lagos,+Nigeria/@6.6415442,3.2716378,13z/data=!3m1!4b1?entry=ttu" target="_blank">
              <Typography variant="subhead" className="!font-bold flex items-center gap-3 hover:underline">
                <BsPinMap />
                Lagos, Nigeria
              </Typography>
            </a>
            <Line />
            <div className="flex flex-col gap-2">
              <Typography mode="dark" variant="body">
                <a href="mailto:atayerotommiw@gmail.com" target="_blank" className='hover:underline'>atayerotommiwa@gmail.com</a>
              </Typography>
              <Typography mode="dark" variant="body" className='lg:hidden hover:underline'>
                <a href="tel:+2349136852885" target="_blank">+234-913-6852-885</a>
              </Typography>
              <Typography mode="dark" variant="body" className='hidden lg:block'>
                +234-913-6852-885
              </Typography>
            </div>
          </div>
        </Container>
      </div>
    </Container>
  )
}

export default Contact