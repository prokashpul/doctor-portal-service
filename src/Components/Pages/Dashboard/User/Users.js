import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../../Sheared/Spinner/Spinner";

const Users = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-primary">
            <tr>
              <th>Name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
