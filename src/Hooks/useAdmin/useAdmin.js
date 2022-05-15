import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";

const useAdmin = () => {
  const [user] = useAuthState(auth);
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;

    if (email)
      fetch(`http://localhost:5000/admin/${email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(false);
        });
  });
  return [admin, adminLoading];
};

export default useAdmin;
