import { Link } from "react-router-dom";
import Container from "../../Components/Container";


const Banner = () => {
    return (
        <div className="my-10">
            <Container>
                <div className="text-center  space-y-3">
                    <h4 className="font-medium text-3xl text-[#00000080]">Secure Task Management for Teams</h4>
                    <h1 className="font-bold text-7xl ">Your Team. <span className="text-[#00000080]">Aligned.</span></h1>
                    <div className="pt-5 flex justify-center items-center">
                        <Link to='/taskManager'>
                            <button className="btnBig ">Get Started</button>
                        </Link>

                    </div>
                </div>

                <div className="mt-8 flex justify-center items-center ">
                    <img src="/laptop.jpg" className=" w-full h-full object-cover" alt="" />
                </div>
            </Container>
            <div className="  ">
                <img src="/wave2.png" className="w-full object-cover" alt="" />
            </div>
        </div>
    );
};

export default Banner;