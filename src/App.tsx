import { Route, Routes } from "react-router-dom"
import { Footer, Header } from "./components"
import { Contact, Experience, Home, Projects } from "./features"

function App() {

  return (
    <div>
      <Header />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
