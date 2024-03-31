import Chart from "../../Components/Chart";
import Banner from "./Banner";


const Home = () => {
    return (
        <div className="pt-10">
          <Banner></Banner>


          
          <div className='my-10'>
                <h1   className='text-4xl text-center p-5 uppercase font-bold my-10 '>Users of Our <span className="text-[#00AAFF]">Task Management</span> Website </h1>
          <div 
     > 
          <Chart ></Chart>
          </div>
            </div>
        </div>
    );
};

export default Home;