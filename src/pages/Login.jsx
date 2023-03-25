import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {
    // react rooter form
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="flex h-screen bg-gray-800 text-white">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" space-y-2">
                        <div className="w-[100vw] h-[100vh] px-3 sm:px-5 flex items-center justify-center absolute">
                            <div className="w-full sm:w-1/2 lg:2/3 px-6 bg-gray-500 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4  rounded-lg">
                                <div className="w-full flex justify-center text-[#00FF00] text-xl mb:2 md:mb-5">
                                    Sign In
                                </div>
                                <div className="mb-6">
                                    <label for="email" className="block mb-2 text-xs font-medium text-white">Your email</label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" nama="email" {...register("email", { required: true })} />
                                    {/* hanndle errror */}
                                    <span className=" text-red-700">{errors.email?.type === 'required' && <p role="alert">Email harus di isi</p>}</span>

                                </div>

                                <div className="mb-6">
                                    <label for="password" className="block mb-2 text-xs font-medium text-white">Your password</label>
                                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"{...register("password", { required: true })} />
                                    {/* hanndle errror */}
                                    <span className=" text-red-700">{errors.password?.type === 'required' && <p role="alert">password harus di isi</p>}</span>

                                </div>
                                <div className="flex flex-row justify-between">
                                    <div className="text-white text-sm md:text-md ">Forgot Password</div>
                                    <div className="text-[#00FF00] text-sm md:text-md">Signup</div>
                                </div>

                                <button type="submit" className=" mt-4 md:mt-10 w-full flex justify-center text-white text-xs md:text-xl bg-[#00FF00] py-2 rounded-md label">
                                    <Link to="pertama">Login</Link>
                                </button>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;