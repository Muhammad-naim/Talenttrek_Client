import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../firebase/authProvider/AuthProvider";


const SignupPage = () => {
    const { user, createUser, updateUserInfo, } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        createUser(data?.email, data?.password)
            .then(result =>
            {
                console.log(data.photoURl);
                updateUserInfo(data.name, data.photoURl)
                    .then(res => {
                        navigate('/')
                })
                }
                
            )
            .catch(error => console.log(error.message))        
    };
    return (
        <div>
            <div className="hero font-tl-font">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="text-center ">
                            <h1 className="text-4xl font-bold font-heading">signup</h1>
                        </div>
                        <form  onSubmit={handleSubmit(onSubmit)} className="card-body px-4 gap-0 py-3">
                            <div className="flex gap-2 justify-center">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Name</span>
                                    </label>
                                    <input type="text" name="name" {...register("name")} required placeholder="name" className="input input-bordered h-8" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name="photoURL" placeholder="photo URL" {...register("photoURl")} required className="input input-bordered h-8" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" {...register("email")} required className="input input-bordered h-8" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password")} required placeholder="password" className="input input-bordered h-8" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Confirm password</span>
                                </label>
                                <input type="password" name="confirm" placeholder="confirm password"
                                   {...register("confirm")} required className="input input-bordered h-8" />
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="form-control mt-4">
                                <button className="btn btn-ghost btn-sm btn-outline">Signup</button>
                            </div>
                            <p className="text-center my-2"><small>Already have an account? <Link to={'/login'}>login</Link></small></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;