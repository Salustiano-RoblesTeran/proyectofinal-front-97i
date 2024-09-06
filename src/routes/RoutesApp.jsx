import { Routes, Route} from "react-router-dom"

import AboutScreen from "../Pages/AboutScreen"
import AdminScreen from "../Pages/AdminScreen"
import ErrorScreen from "../Pages/ErrorScreen"
import UserScreen from "../Pages/UserScreen"
import MedicoScreen from "../Pages/MedicoScreen"
import Perfil from "../Pages/PerfilScreen"

import ProtectedRoutes from "./ProtectedRoutes"
import ProtectedRoutesMedico from "./ProtectedRoutesMedico"
import ProtectedRoutesUser from "./ProtectedRoutesUser"
import ProtectedRoutesAdmin from "./ProtectedRoutesAdmin"
import MisConsScreen from "../Pages/MisConsScreen"
import RegPacScreen from "../Pages/RegPacScreen"


const RoutesApp = ({ cerrarSesion, user }) => {
  return (
            <Routes>
                <Route path="/about" element={<AboutScreen/>}/>

                <Route path="/perfil" element={
                    <ProtectedRoutes user={user}>
                        <Perfil/>
                    </ProtectedRoutes>}/>
                
                
                {/*Rutas protegidas usuario, admin, medico*/}
                <Route path="/admin" element={
                    <ProtectedRoutesAdmin user={user}>
                        <AdminScreen/>
                    </ProtectedRoutesAdmin>
                }/>
                <Route path="/user" element={
                    <ProtectedRoutesUser user={user}>
                        <UserScreen/>
                    </ProtectedRoutesUser>
                }/>
                <Route path="/misconsultas" element={
                    <ProtectedRoutesUser user={user}>
                        <MisConsScreen/>
                    </ProtectedRoutesUser>
                }/>
                <Route path="/medico" element={
                    <ProtectedRoutesMedico user={user}>
                        <MedicoScreen/>
                    </ProtectedRoutesMedico>
                }/>
                <Route path="/registropancientes" element={
                    <ProtectedRoutesMedico user={user}>
                        <RegPacScreen/>
                    </ProtectedRoutesMedico>
                }/>
                

                
                <Route path="*" element={<ErrorScreen/>}/>
            </Routes>
  )
}
export default RoutesApp