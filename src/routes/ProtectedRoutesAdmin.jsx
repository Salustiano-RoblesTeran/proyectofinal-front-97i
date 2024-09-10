import { Navigate } from "react-router-dom";

const ProtectedRoutesAdmin = ({ children, user }) => {
    if (user === "admin") {
        return children;
      } else {
        return <Navigate to="/" />;
      }
}
export default ProtectedRoutesAdmin