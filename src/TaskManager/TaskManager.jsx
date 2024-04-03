import moment from "moment";
import Container from "../Components/Container";
import useAuth from "../hooks/useAuth";
import { FaTimesCircle } from "react-icons/fa";
import useTaskData from "../hooks/useTaskData";
import TaskCard from "./TaskCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const TaskManager = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [data, refetch, isLoading] = useTaskData();
    let greeting = (null);
    const hour = moment().hour();
    if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }
    const date = moment().format('LL');



    const handleTask = (event) => {
        event.preventDefault();
        const form = event.target;
        const taskName = form.taskName.value;
        const taskDescription = form.taskDescription.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const email = user?.email;

        const taskData = {
            taskName,
            taskDescription,
            deadline,
            priority,
            email

        }

        //post data

        console.log(taskData);

        axiosSecure.post('/api/v1/tasks', taskData)
            .then(res => {
                if (res?.data) {
                    document.getElementById('my_modal_5').close();
                    toast.success(`${taskName} added successfully`, { duration: 3000 })
                    refetch()
                }
            })


    }

    return (
        <div className="min-h-screen">
            <Container>
                <div className="text-center mt-16">
                    <div className="flex justify-center items-center">
                        <img className="w-[50px] hidden md:flex rounded-full  mr-2" src={user?.photoURL} alt="" />
                        <h1 className="md:text-2xl font-medium">
                            <span className="text-[#00AAFF]">{greeting}, </span> {user?.displayName}
                        </h1>

                    </div>
                    <div className='text-center'>
                        {date}
                    </div>
                </div>


                {/* set task input field and button */}
                <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <div className="mt-5 flex justify-center ">
                        <button
                            onClick={() => document.getElementById('my_modal_5').showModal()}
                            className="sharedBtn">Add new task</button>
                    </div>
                    <dialog
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle">

                        {/* Modal body text and input field  */}
                        <div className="modal-box relative">
                            <button onClick={() => document.getElementById('my_modal_5').close()} className='flex justify-end right-0 top-0 p-3 absolute'>
                                <FaTimesCircle className='text-3xl text-[#D2042D] hover:text-red-600 bg-white rounded-full' /></button>
                            <p className="py-2 px-5 font-bold">Give us your Task Details</p>

                            <div className="modal-action flex-start justify-start">

                                <form onSubmit={handleTask} className='space-y-2 px-5' method="dialog">
                                    {/* if there is a button in form, it will close the modal */}


                                    <div className="text-left">
                                        <label className="">
                                            <span className="font-medium text-[#00AAFF]"> Task Description</span>
                                        </label>
                                        <input name='taskName' type="text" placeholder="Task Name" className="input input-bordered input-success w-full max-w-xs" />

                                    </div>
                                    <div className="text-left ">
                                        <label className="font-medium text-[#00AAFF]">
                                            <span className=""> Task Description</span>
                                        </label>
                                        <textarea name='taskDescription' placeholder="Task description" rows="4" className="input input-bordered input-success w-full max-w-xs"></textarea>

                                    </div>



                                    <div className=" text-left ">
                                        <label className="font-medium text-[#00AAFF]">
                                            <span className=""> Deadline</span>
                                        </label>
                                        <input name='deadline' type="date" placeholder="task Date" className="input input-bordered input-success w-full max-w-xs" />

                                    </div>





                                    <div className="text-left ">
                                        <label className="font-medium text-[#00AAFF]">
                                            <span className=""> Priority</span>
                                        </label>

                                        <select name="priority" className="input input-bordered input-success w-full max-w-xs " id="">
                                            <option disabled selected hidden>
                                                priority
                                            </option>

                                            <option value="low">low</option>
                                            <option value="moderate">moderate</option>
                                            <option value="high">high</option>
                                        </select>
                                    </div>

                                    <button type='submit' className=" sharedBtn ">Submit</button>

                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>

                {/* card data */}
                <div className="grid grid-cols-1  my-8   lg:grid-cols-3 gap-10 xl:col-span-4 p-5 ">
                    {
                        data?.map((task) => (
                            <TaskCard
                                task={task}
                                key={task?._id}
                                refetch={refetch}
                                isLoading={isLoading}
                            />
                        ))
                    }
                </div>

            </Container>
        </div>
    );
};

export default TaskManager;