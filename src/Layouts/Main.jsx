import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";


const Main = () => {
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>
         <div >

         <Outlet></Outlet> 
         </div>

         <Footer></Footer>
        </div>
    );
};

export default Main;