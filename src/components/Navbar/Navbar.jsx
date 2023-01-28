import { useLocation, Link } from 'react-router-dom'
import './Navbar.scss'
import IconLogoDesign from '../Icons/IconLogoDesign'
import IconBrand from '../Icons/IconBrand'
import IconList from '../Icons/IconList'
import IconAdd from '../Icons/IconAdd'

function Navbar() {
  const path = useLocation().pathname
  return (
    <>
      <nav>
        <div className="nav-item nav-brand">
          <IconLogoDesign
            className="nav-logo-design"
            alt="Health Wealth logo design"
          />
          <IconBrand
            className="nav-logo-brand"
            alt="Health Wealth logo brand name"
          />
          <h1>HRnet Employees</h1>
          {path === '/' ? (
            <Link to="./Employees" className="nav-menu-choise">
              <IconAdd />
              <span>Current</span>
            </Link>
          ) : (
            <Link to="/" className="nav-menu-choise">
              <IconList />
              <span>Create</span>
            </Link>
          )}
        </div>
      </nav>
      <hr className="nav-shadow" />
    </>
  )
}
export default Navbar
