import { MdDelete } from "react-icons/md";
import { FaEdit, FaTimesCircle } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const TaskCard = ({ task, refetch, isLoading }) => {
    const { deadline, email, priority, progressPercentage, taskDescription, taskName, totalDays, _id, isCompleted
    } = task;
    const axiosSecure = useAxiosSecure()


    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/api/v1/tasks/${_id}`)
                    .then((postData) => {
                        if (postData?.data) {
                            toast.success('Successfully Deleted!', { duration: 3000 });
                            refetch();
                        }
                    });
            }
        });

    }
    console.log(task);

    const handleUpdateTask = (event) => {
        event.preventDefault()
        const form = event.target;
        const taskName = form.taskName.value;
        const taskDescription = form.taskDescription.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;


        const taskData = {
            taskName,
            taskDescription,
            deadline,
            priority


        }
        axiosSecure.patch(`/api/v1/tasks/${_id}`, taskData)
            .then((postData) => {
                if (postData?.data) {
                    document.getElementById(`my_modal${_id}`).close();
                    toast.success('Successfully updated your task data!', { duration: 3000 });
                    refetch();
                    form.reset();
                }
            });
    }


    return (
        <div>
            <div className={`bg-cover bg-[url('/wave.png')] bg-opacity-60  object-cover bg-no-repeat bg-center shadow-2xl overflow-hidden rounded-xl`}>
                <div className='mb-5 font-medium p-5 text-black'>
                    <h1 className='font-bold text-black  mb-2 text-4xl text-center'> {taskName}</h1>
                    <h2 className={`text-xl font-bold ${priority === 'low' ? 'text-green-500' : priority === 'moderate' ? 'text-yellow-500' : 'text-red-500'}`}>Priority: {priority}</h2>
                    <h3 className="text-gray-500 my-2">Description: {taskDescription}</h3>
                    <h3>Total Days Remaining: {totalDays} days</h3>
                    <h1 className='text-center mt-2 text-red-500'>Deadline:{deadline}</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <div className="relative h-40 w-40">
                        <svg className="h-full w-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#1AACAC]" strokeWidth="2"></circle>
                            <g className="origin-center -rotate-90 transform">
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="16"
                                    fill="none"
                                    className="stroke-current text-[#EEEEEE]"
                                    strokeWidth="2"
                                    strokeDasharray="100"
                                    strokeDashoffset={progressPercentage}>
                                </circle>
                            </g>
                        </svg>
                        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <span className="text-center text-2xl font-bold text-[#FFF6E9] ">{progressPercentage.toFixed(2)}%</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-around items-center my-5 pb-5'>
                        <button
                            className={`btn ${isCompleted === true ? "disabled" : ""} ml-2 bg-[#3734e9] hover:bg-[#315196] border-none text-2xl text-white`}
                            onClick={() => document.getElementById(`my_modal${_id}`).showModal()}
                            disabled={isCompleted === true}>
                            <FaEdit />
                        </button>
                        <dialog
                            id={`my_modal${_id}`}
                            className="modal modal-bottom transform duration-500 sm:modal-middle">
                            <div className="modal-box transform duration-500 relative">
                                <button onClick={() => document.getElementById(`my_modal${_id}`).close()} className='flex transform duration-500 justify-end right-0 top-0 p-3 absolute'>
                                    <FaTimesCircle className='text-3xl text-[#D2042D] hover:text-red-600 bg-white rounded-full' />
                                </button>
                                <p className="py-4 px-5 font-bold">Update your Task Details</p>
                                <div className="modal-action block w-full">
                                    <form onSubmit={handleUpdateTask} className='space-y-2 px-5' method="dialog">
                                        {/* if there is a button in form, it will close the modal */}


                                        <div className="text-left">
                                            <label className="">
                                                <span className="font-medium text-[#00AAFF]"> Task Description</span>
                                            </label>
                                            <input name='taskName' type="text" placeholder="Task Name" defaultValue={taskName} className="input input-bordered input-success w-full max-w-xs" />

                                        </div>
                                        <div className="text-left ">
                                            <label className="font-medium text-[#00AAFF]">
                                                <span className=""> Task Description</span>
                                            </label>
                                            <textarea name='taskDescription' placeholder="Task description" defaultValue={taskDescription} rows="4" className="input input-bordered input-success w-full max-w-xs"></textarea>

                                        </div>



                                        <div className="  ">
                                            <label className=" block font-medium text-[#00AAFF]">
                                                <span className=""> Deadline</span>
                                            </label>
                                            <input name='deadline' defaultValue={deadline} type="date" placeholder="task Date" className="input input-bordered input-success w-full max-w-xs" />

                                        </div>





                                        <div className="text-left ">
                                            <label className="block font-medium text-[#00AAFF]">
                                                <span className=""> Priority</span>
                                            </label>

                                            <select name="priority" defaultValue={priority} className="input input-bordered input-success w-full max-w-xs " id="">
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
                        <button onClick={handleDelete} className="btn bg-red-600 hover:bg-red-500 text-2xl text-[#EEEEEE]">
                            <MdDelete />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;