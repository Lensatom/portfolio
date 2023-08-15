import { Route, Routes } from "react-router-dom"
import { Footer, Header } from "./components"
import { Contact, Experience, Home, Projects } from "./features"

function App() {

  return (
    <div>
      <Header />
      <div className="pt-16">
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/experience" element={<Experience />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
