import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      axios
        .put(
          `https://warm-anchorage-40266.herokuapp.com/user/${email}`,
          currentUser
        )
        .then((res) => {
          const token = res?.data?.accessToken;
          localStorage.setItem("token", token);
          setToken(token);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
