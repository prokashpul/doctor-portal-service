import React from "react";

import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col m-5 ">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side ">
        <label for="my-drawer-2" className="drawer-overlay  "></label>
        <ul className="menu p-4 overflow-y-auto w-52 bg-slate-100 text-base-content sticky  top-0 ">
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
