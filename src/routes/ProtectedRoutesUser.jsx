// ProtectedRoutesUser.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoutesUser = ({ user, children }) => {
  console.log("Usuario en ProtectedRoutesUser:", user);

  if (!user || user.role !== 'usuario') {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoutesUser;
