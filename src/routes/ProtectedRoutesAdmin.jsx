import { Navigate } from "react-router-dom";

const ProtectedRoutesAdmin = ({ children, user }) => {
    if (user === "ADMIN_ROLE") {
        return children;
      } else {
        return <Navigate to="/" />;
      }
}
export default ProtectedRoutesAdmin