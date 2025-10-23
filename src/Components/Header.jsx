import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (

    <header className="bg-primary text-white shadow-sm py-4">
      <nav className="navbar navbar-expand-lg navbar-dark container py-3">
        <a className="navbar-brand fw-bold fs-3" href="#">
          Tikiti Yangu
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item px-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-white" : "nav-link text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                to="/FeaturedEvents"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-white" : "nav-link text-white"
                }
              >
             Featured
              </NavLink>
              
            </li>
            <li className="nav-item px-2">
              <NavLink
                to="/UpcomingEvents"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-white" : "nav-link text-white"
                }
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active text-white" : "nav-link text-white"
                }
              >
              Contact us
              </NavLink>
              
            </li>
          </ul>

          <div>
            <button className="btn btn-outline-light me-2" onClick={handleLoginClick}>Login</button>
            <button className="btn btn-warning text-dark fw-bold" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;