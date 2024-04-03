import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useTaskData = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['taskData', user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/tasks?email=${user?.email}`)
            return res.data;
        }



    })
    return [data, refetch, isLoading]
};

export default useTaskData;