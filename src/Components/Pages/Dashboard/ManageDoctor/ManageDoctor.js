import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../../Sheared/Spinner/Spinner";
import TableData from "./tableData";

const ManageDoctor = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctor", () =>
    fetch("https://warm-anchorage-40266.herokuapp.com/doctors", {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl text-center font-bold my-5">Manage Doctors</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Image</th>
            <th>Name</th>
            <th>email</th>
            <th>Specialist</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {doctors?.map((doctor, index) => (
            <TableData
              doctor={doctor}
              index={index + 1}
              refetch={refetch}
              key={doctor._id}
            ></TableData>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageDoctor;
