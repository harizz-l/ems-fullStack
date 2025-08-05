
import './App.css'
import EmployeeComponent from './Component/EmployeeComponent'
import FooterComponent from './Component/FooterComponent'
import HeaderComponent from './Component/HeaderComponent'
import ListemployeeComponent from './Component/ListemployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          //http://localhost:3000 
            <Route path='/' element={<ListemployeeComponent/>}></Route>
          {/* //http://localhost:3000  */}
            <Route path='/employees' element={<ListemployeeComponent/>}></Route>
          //http://localhost:3000/add-employee
            <Route path='/add-employee' element={<EmployeeComponent/>}></Route> 
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
