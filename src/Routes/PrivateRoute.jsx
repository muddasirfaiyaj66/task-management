import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import HashLoader from "react-spinners/HashLoader";

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
    const location = useLocation();
    if(loading){
        return <div className=" h-full w-full text-center flex justify-center items-center">
        <HashLoader className="  text-center flex justify-center items-center m-auto mt-28" color="#00AAFF" />
    </div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;