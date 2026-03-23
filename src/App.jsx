import { Route, Routes } from "react-router-dom"
import Dashboard from "./Components/Dashboard"
import Sidebar from "./Components/Sidebar"
import Stats from "./Components/Stats"

function App() {
return(
    <>
    <div className="w-screen flex justify-center bg-purple-50">
      <Sidebar />
     <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/stats" element={<Stats/>} />
     </Routes>

    </div>
    </>
  )
}
export default App