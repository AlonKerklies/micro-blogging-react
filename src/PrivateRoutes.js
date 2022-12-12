import { Outlet, Navigate } from 'react-router-dom'
import { auth } from "./firebase"
console.log("PrivateRoutes");

const PrivateRoutes = () => {
    
    //   auth = {'token':true}
    
    return(
        auth.currentUser  ? <Outlet/> : <Navigate to="/log"/>
    )
}

export default PrivateRoutes