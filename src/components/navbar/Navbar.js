import { NavLink } from "react-router-dom";
// import Login from '../login/Login'
const Header = ({ onOpenModal }) => {

  return (
<>
<nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top" aria-label="Fourth navbar example">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <NavLink className="nav-link active fw-bold fs-4 mx-3" aria-current="page" to="/React-Redux">ONLINE SHOP</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link  mt-2 " to="/products">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link mt-2 " to="/about">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link mt-2" to="/contact">Contact Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fs-3" to="/cart"><i className="bi bi-cart4"></i></NavLink>
          </li>
        </ul>
        
        <div className="text-end d-flex">
        <button type="button" className="btn btn-outline-light ms-3 me-2 s" onClick={onOpenModal}>Login</button>

          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </nav>
  </>
    )
  }
  
  export default Header
