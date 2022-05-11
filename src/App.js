import { Route, Routes } from "react-router-dom";
import Appointment from "./Components/Pages/Appointment/Appointment";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Footer from "./Components/Sheared/Footer/Footer";
import Header from "./Components/Sheared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
