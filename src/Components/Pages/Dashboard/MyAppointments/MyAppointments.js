import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

import auth from "../../../../Firebase.init";
import Spinner from "../../../Sheared/Spinner/Spinner";

const MyAppointments = () => {
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setLoading(true);
      const run = async () => {
        fetch(`http://localhost:5000/booking/?email=${user?.email}`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((res) => {
            if (res.status === 401 || res.status === 403) {
              signOut(auth);
              localStorage.removeItem("token");
              navigate("/");
            }
            return res.json();
          })
          .then((data) => setBooking(data));
        setLoading(false);
      };
      run();
    }
  }, [user, navigate]);

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-primary">
            <tr>
              <th>SL.No</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {booking?.map((booked, index) => (
              <tr key={booked._id}>
                <th>{index + 1}</th>
                <td>{booked.patientName}</td>
                <td>{booked.date}</td>
                <td>{booked.slot}</td>
                <td>{booked.treatment}</td>
                <td>
                  {booked.price && !booked.paid && (
                    <Link to={`/dashboard/payment/${booked._id}`}>
                      <button className="btn btn-xs bg-red-500 text-white">
                        Pay
                      </button>
                    </Link>
                  )}
                  {booked.price && booked.paid && (
                    <span className=" text-red-500 ">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
