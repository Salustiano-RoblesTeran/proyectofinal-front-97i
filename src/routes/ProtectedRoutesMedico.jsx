import { Navigate } from "react-router-dom";

const ProtectedRoutesMedico = ({ children, user }) => {
    if (user === "MEDICO_ROLE") {
        return children;
      } else {
        return <Navigate to="/" />;
      }
}
export default ProtectedRoutesMedico