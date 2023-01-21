import { Outlet, Navigate } from "react-router-dom";
import { auth } from "./firebase";
console.log("PrivateRoutes");

const PrivateRoutes = () => {
  //   בדיקה האם יש משתמש פעיל אם כן תחסום

  return auth.currentUser ? <Outlet /> : <Navigate to="/Signup" />;
};

export default PrivateRoutes;
