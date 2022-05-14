import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase.init";

const MyAppointments = () => {
  const [booking, setBooking] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      const run = async () => {
        await axios(`http://localhost:5000/booking/?email=${user?.email}`).then(
          (res) => setBooking(res.data)
        );
      };
      run();
    }
  }, [user]);
  return (
    <div>
      My appointment {booking?.length}
      <div class="overflow-x-auto">
        <table class="table w-full">
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
