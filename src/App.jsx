import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Room from "./Components/Room"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/room/:roomID' element={<Room />} />
    </Routes>

    </>
  )
}

export default App
