import { Routes, Route} from "react-router-dom"
import NavBar from "../Components/Common/NavBar"
import About from "../Pages/About"
import ProtectedRoutesAdmin from "./ProtectedRoutesAdmin"
import AdminScreen from "../Pages/AdminScreen"
import ErrorScreen from "../Pages/ErrorScreen"
import ProtectedRoutesUser from "./ProtectedRoutesUser"
import UserScreen from "../Pages/UserScreen"
import ProtectedRoutesMedico from "./ProtectedRoutesMedico"
import MedicoScreen from "../Pages/MedicoScreen"


const RoutesApp = () => {
  return (
    <>
        <NavBar>
            <Routes>
                {/* <Route path="/" element={<HomeScreen/>}/> */}
                <Route path="/about" element={<About/>}/>
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
                <Route path="/medico" element={
                    <ProtectedRoutesMedico user={user}>
                        <MedicoScreen/>
                    </ProtectedRoutesMedico>
                }/>
                <Route path="*" element={<ErrorScreen/>}/>
            </Routes>
        </NavBar>
    </>
  )
}
export default RoutesApp