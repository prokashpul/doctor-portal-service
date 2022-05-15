import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase.init";
import useAdmin from "../../../Hooks/useAdmin/useAdmin";
import Spinner from "../../Sheared/Spinner/Spinner";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin();
  const location = useLocation();
  if (loading || adminLoading) {
    return <Spinner></Spinner>;
  }
  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;
