import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

function Layout() {
  return (
    <div>
      <h1>test</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  )
}
export default Layout
