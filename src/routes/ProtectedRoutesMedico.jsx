// ProtectedRoutesMedico.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoutesMedico = ({ user, children }) => {
  console.log("Usuario en ProtectedRoutesMedico:", user);

  if (!user || user.role !== 'medico') {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoutesMedico;
