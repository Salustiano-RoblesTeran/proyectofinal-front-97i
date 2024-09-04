import { Navigate } from "react-router-dom";

const ProtectedRoutesUser = ({ children, user }) => {
    if (user.rol === "USER_ROLE") {
        return children;
      } else {
        return <Navigate to="/" />;
      }
}
export default ProtectedRoutesUser