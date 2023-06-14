import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../firebase/authProvider/AuthProvider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";

const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { createUser, updateUserInfo, googleProvider, signInWithSocials } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.password !== data.confirm) {
            Swal.fire({
                icon: 'error',
                title: "Password didn't match",
                text: 'Please check again!',
            })
            return
        }
        createUser(data?.email, data?.password)
            .then(() => {
                updateUserInfo(data.name, data.photoURl)
                    .then(() => {
                        const user = { name: data.name, email: data.email, role: 'student', photoURl: data.photoURL }
                        fetch('https://talenttrek-server.vercel.app/users', {
                            method: "POST",
                            headers: {
                                "content-type": 'application/json',
                            },
                            body: JSON.stringify(user)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })

            }

            )
            .catch(error => console.log(error.message))
    };
    const handleSocialLogin = () => {
        signInWithSocials(googleProvider)
            .then((res) => {
                console.log(res);
                const user = { name: res.user.displayName, email: res.user.email, role: 'student', photoURl: res.user.photoURL }
                fetch('https://talenttrek-server.vercel.app/users', {
                    method: "POST",
                    headers: {
                        "content-type": 'application/json',
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                        }
                    })
            })
    }
    return (
        <div>
            <Helmet>
                <title>Signup | talenttrek</title>
            </Helmet>
            <div className="hero font-tl-font">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="text-center ">
                            <h1 className="text-4xl font-bold font-heading">signup</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body px-4 gap-0 py-3">
                            <div className="flex gap-2 justify-center">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Name</span>
                                    </label>
                                    <input type="text" {...register("name")} required placeholder="name" className="input input-bordered h-8" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" placeholder="photo URL" {...register("photoURl")} required className="input input-bordered h-8" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="text" placeholder="email" {...register("email")} required className="input input-bordered h-8" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} {...register("password", {
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                })} required placeholder="password" className="input input-bordered h-8" />
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must contain one Uppercase, one number and one special character.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Confirm password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} placeholder="confirm password"
                                    {...register("confirm", {
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,

                                    })} required className="input input-bordered h-8" />
                                {errors.confirm?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.confirm?.type === 'pattern' && <p className="text-red-600">Password must contain one Uppercase, one number and one special character.</p>}
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="flex items-center  gap-2">
                                <input type="checkbox" onChange={() => setShowPassword(!showPassword)} className="checkbox checkbox-xs" />
                                <p>Show password</p>
                            </div>
                            <div className="form-control mt-4 ">
                                <button className="capitalize btn btn-primary btn-md btn-outline w-9/12 mx-auto">Signup</button>
                            </div>
                            <p className="text-center my-2"><small>Already have an account? <Link to={'/login'}>login</Link></small></p>
                        </form>
                        <div className="divider  w-5/6 mx-auto">or</div>
                        <div className="flex justify-center px-4 mb-4">
                            <button
                                className="btn btn-md btn-primary btn-outline w-9/12"
                                onClick={handleSocialLogin}
                            ><FcGoogle className="text-lg" /> google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;