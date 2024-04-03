import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
    const { signInWithGoogle } = useAuth()
    const axiosPublic = useAxiosPublic()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result?.user?.email,
                    name: result?.user?.displayName
                };

                axiosPublic.post("api/v1/users", userInfo)
                    .then(res => {
                        if (res?.data) {

                            toast.success('Successfully login by Google!', { duration: 3000 });
                        }
                    })
                // .catch(error => {
                //     const errorMessage = error.response.data.message;
                //     toast.error(`${errorMessage}`, { duration: 3000 }); 
                // });

                // Redirect user if needed
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(`Error during sign-in: ${errorMessage}`, { duration: 3000 });
            });
    };

    return (
        <div onClick={handleGoogle} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
            <FcGoogle size={32} />

            <p>Continue with Google</p>
        </div>
    );
};

export default SocialLogin;