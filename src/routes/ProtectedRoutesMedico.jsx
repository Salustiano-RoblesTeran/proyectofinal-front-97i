import { Navigate } from "react-router-dom";

const ProtectedRoutesMedico = ({ children, user }) => {
    if (user === "medico") {
        return children;
      } else {
        return <Navigate to="/" />;
      }
}
export default ProtectedRoutesMedico