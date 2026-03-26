import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import Stats from "./Components/Stats";
import { useExpenses } from "./Hooks/useExpenses";
import Navbar from "./Components/Navbar";
import { SideBarModal } from "./Modals/SideBarModal";

function App() {
  const expenseState = useExpenses();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar setIsOpen={setIsModalOpen} />
      <SideBarModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <div className="w-screen min-h-screen flex justify-center bg-purple-50">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard {...expenseState} />} />
          <Route path="/stats" element={<Stats expenses={expenseState.expenses} />} />
        </Routes>
      </div>
    </>
  );
}
export default App