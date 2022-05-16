import { Route, Routes } from "react-router-dom";
import Appointment from "./Components/Pages/Appointment/Appointment";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Footer from "./Components/Sheared/Footer/Footer";
import Header from "./Components/Sheared/Header/Header";
import RequireAuth from "./Components/Utilities/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Booking from "./Components/Pages/Dashboard/Booking/Booking";
import MyAppointments from "./Components/Pages/Dashboard/MyAppointments/MyAppointments";
import Users from "./Components/Pages/Dashboard/User/Users";
import RequireAdmin from "./Components/Utilities/RequireAdmin/RequireAdmin";
import AddDoctor from "./Components/Pages/Dashboard/AddDoctor/AddDoctor";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route path="/dashboard" element={<MyAppointments />}></Route>
          <Route
            path="/dashboard/appointments"
            element={<MyAppointments />}
          ></Route>
          <Route
            path="/dashboard/booking"
            element={<Booking></Booking>}
          ></Route>
          <Route
            path="/dashboard/users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
