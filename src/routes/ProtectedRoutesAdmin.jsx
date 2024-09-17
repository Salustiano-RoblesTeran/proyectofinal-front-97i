// ProtectedRoutesUser.jsx
// ProtectedRoutesAdmin.jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoutesAdmin = ({ user, children }) => {
  console.log('Usuario en ProtectedRoutesAdmin:', user);
  
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" />; // Redirigir a la página principal si no es admin
  }
  return children;
};

// Asegúrate de exportarlo como default
export default ProtectedRoutesAdmin;