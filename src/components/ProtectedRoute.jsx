import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
