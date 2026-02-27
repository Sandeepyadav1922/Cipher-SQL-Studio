import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ShowError from "./components/Error";
import Navbar from "./components/Navbar";
import AssignmentsPage from "./pages/AssignmentsPage";
import QueryPage from "./pages/QueryPage";
function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Navigate to={"/assignments"}/>}/>
      <Route path="/assignments" element={<AssignmentsPage/>}/>
      <Route path="/assignments/:id" element={<QueryPage/>}/>
      <Route path="*" element={<ShowError/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
