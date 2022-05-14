import React from "react";

import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input
        id="dashboard-sidebar "
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col m-5 ">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-slate-100 rel">
        <label for="dashboard-sidebar" className="drawer-overlay "></label>
        <ul className="menu p-4 overflow-y-auto w-52 text-base-content sticky  top-0">
          <li>
            <NavLink to="/dashboard/appointments">My Appointments</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">Booking </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
