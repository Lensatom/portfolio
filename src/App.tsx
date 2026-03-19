import { Route, Routes } from "react-router-dom";
import { Footer, Header, Line } from "./components";
import Home from './features/Home';

function App() {
  return (
      <div>
        <div className={`w-full z-30 fixed`}>
          <Header />
          <Line mode='light' />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
