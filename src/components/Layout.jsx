import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Navbar from './Navbar/Navbar'

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  )
}
export default Layout
