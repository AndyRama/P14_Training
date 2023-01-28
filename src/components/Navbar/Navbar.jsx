// import logoBrand from '../../assets/HRnet_logo-brand.svg';
// import icoList from '../../assets/ico-list.svg';
// import icoAdd from '../../assets/ico-user-add.svg';
// import logoDesign from '../../components/Icons/logoDesign';

import { useLocation, Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  const path = useLocation().pathname
  return (
    <>
      <nav>
        <div className="nav-item nav-brand">
          <h1>HRnet</h1>
          {path === '/' ? (
            <Link to="./Employees" className="nav-menu-choise">
              <img
                className="nav-ico"
                // src={icolist}
                alt="health W"
              />
              <span>Current</span>
            </Link>
          ) : (
            <Link to="/" className="nav-menu-choise">
              <img
                className="nav-ico"
                //src={logoBrand}
                alt=""
              />
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
