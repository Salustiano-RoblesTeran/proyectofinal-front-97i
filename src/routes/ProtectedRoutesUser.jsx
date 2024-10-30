// ProtectedRoutesUser.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoutesUser = ({ user, children }) => {
  console.log("Usuario en ProtectedRoutesUser:", user);  // Verificar el estado actual de `user`
  
  if (!user || user.role !== 'usuario') {
    return <Navigate to="/" />; // Redirigir si no es usuario
  }
  return children;
};

export default ProtectedRoutesUser;
