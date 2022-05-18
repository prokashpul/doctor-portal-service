import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../Firebase.init";
import Spinner from "../../../Sheared/Spinner/Spinner";

const Users = () => {
  const navigate = useNavigate();

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://warm-anchorage-40266.herokuapp.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("token");
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  const makeAdmin = (email) => {
    console.log(email);
    fetch(`https://warm-anchorage-40266.herokuapp.com/admin/user/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.warning("You not accessed ");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Add Admin Successful");
        }
        refetch();
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-primary">
            <tr>
              <th>Sl.No</th>
              <th>Email</th>
              <th>Role</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>
                  {!user?.role ? (
                    <button
                      onClick={() => makeAdmin(user.email)}
                      className="btn btn-sm btn-accent btn-outline "
                    >
                      Make admin
                    </button>
                  ) : (
                    "Admin"
                  )}
                </td>
                <td>
                  <button className="btn btn-sm btn-accent btn-outline ">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
