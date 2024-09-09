import { Navigate } from "react-router-dom";

const ProtectedRoutesUser = ({ children, user }) => {
    if (user === "usuario") {
        return children;
      } else {
        return <Navigate to="/" />;
      }
}
export default ProtectedRoutesUser