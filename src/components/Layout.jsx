import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Employee from '../pages/Employee/Employee'
import Navbar from './Navbar/Navbar'

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </>
  )
}
export default Layout
