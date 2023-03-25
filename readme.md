<form onSubmit={handleSubmit(onSubmit)}>
                        <div className=" space-y-2">
                            <div className=" flex flex-col spice-y-1">
                                <label className="text-sm">Username</label>
                                <input className="border border-gray-500 text-xs py-1 px-2" type="text" name="username"{...register("username", { required: true })} />
                                <span className=" text-red-500">{errors.username?.type === 'required' && <p role="alert">First name is kosong</p>}</span>
                                <span className=" text-red-500">{errors.username?.type === 'required' && <p role="alert">First name is kosong</p>}</span>
                            </div>
                            <div className=" flex flex-col space-y-1">
                                <label className="text-sm">Password</label>
                                <input className="border border-gray-500 text-xs py-1 px-2" type="password" name="password" {...register("password", { required: true })} />{errors.password?.type === 'required' && <p role="alert">First name is kosong</p>}
                            </div>
                            <button className=" bg-blue-500 mt-5 border w-full
                            ">Login</button>
                        </div>
                    </form>