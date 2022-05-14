import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase.init";
import Spinner from "../../../Sheared/Spinner/Spinner";

const MyAppointments = () => {
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  useEffect(() => {
    setLoading(true);
    if (user) {
      const run = async () => {
        await axios(`http://localhost:5000/booking/?email=${user?.email}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }).then((res) => setBooking(res.data));
        setLoading(false);
      };
      run();
    }
  }, [user]);

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      My appointment {booking?.length}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-primary">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {booking?.map((booked, index) => (
              <tr key={booked._id}>
                <th>{index + 1}</th>
                <td>{booked.patient}</td>
                <td>{booked.date}</td>
                <td>{booked.slot}</td>
                <td>{booked.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
