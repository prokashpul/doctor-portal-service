import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";

const navMenu = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/">About</NavLink>
    </li>
    <li>
      <NavLink to="/appointment">Appointment</NavLink>
    </li>
    <li>
      <NavLink to="/">Reviews</NavLink>
    </li>
    <li>
      <NavLink to="/">Contact Us</NavLink>
    </li>
  </>
);

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <header className="navbar bg-base-100 z-50">
      <div className="w-full ">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navMenu}
            {user && (
              <button onClick={logout} className="btn text-neutral btn-primary">
                Log Out
              </button>
            )}
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost normal-case text-xl flex justify-center"
        >
          Doctor Portal
        </NavLink>

        <div className="navbar-end flex  lg:hidden">
          {user ? (
            <label
              for="dashboard-sidebar"
              className="btn btn-primary drawer-button text-neutral"
            >
              Dashboard
            </label>
          ) : (
            <button className="btn btn-primary">
              <NavLink to="/login">Login</NavLink>
            </button>
          )}
        </div>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal gap-3 p-0">
          {navMenu}
          {user && (
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          )}
          {!user ? (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          ) : (
            <button onClick={logout} className="btn btn-ghost">
              Log Out
            </button>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
