import { Navigate } from 'react-router-dom';

const ProtectedRoutesUser = ({ user, children }) => {
  // Asegúrate de que el rol sea el correcto y el usuario esté autenticado
  if (!user || user.role !== 'usuario') {
    return <Navigate to="/" />; 
  }
  return children;
};

export default ProtectedRoutesUser;
