import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashbord-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side ">
        <label for="dashbord-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <NavLink to="/dashboard/appointments">My Appointments</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">Booking</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
