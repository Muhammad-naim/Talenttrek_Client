import Lottie from "lottie-react";
import loginAmination from '../../assets/login.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../firebase/authProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
    const { signInwithpassword, signInWithSocials, googleProvider, } = useContext(AuthContext)
    const [feedbackMessage, setFeedbackMessage] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname;
    const { register, handleSubmit,} = useForm();
    const onSubmit = data => {
        signInwithpassword(data?.email, data?.password)
            .then(() =>
                navigate(from || '/')
        )
            .catch(error => {
                console.log(error.message)
                if (error.message.includes('wrong-password')) {
                    setFeedbackMessage("Wrong password!");
                }
                if (error.message.includes('user-not-found')) {
                    setFeedbackMessage("User not found!");
                }
            })
    };
    const handleSocialLogin = () => {
        signInWithSocials(googleProvider)
            .then(() => {
                navigate(from || '/')
        })        
    }
    return (
        <div>
            <Helmet>
                <title>Login | talenttrek</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse items-center gap-5">
                    <div className="text-center pl-10">
                        <Lottie animationData={loginAmination} loop={true} />;
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form  onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email")} required className="input input-bordered" />
                                {/* {errors.email && <span>This field is required</span>} */}
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                <input type={isVisible ? 'text' : 'password'} placeholder="password" {...register("password")}
                                    required className="input input-bordered w-full" />
                                <span className="absolute top-1/4 right-2 mt-1 inline" onClick={() => setIsVisible(!isVisible)}>
                                    {
                                        isVisible ?
                                            <FaEyeSlash /> :
                                            <FaEye />
                                    }
                                </span>
                            </div>

                                <small className="text-red-600 pl-1">{feedbackMessage}</small>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            
      
                            <div className="form-control ">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <small><p className="text-center">New here? <Link to={'/signup'}>Signup</Link></p></small>
                        </form>
                        <div className="divider  w-5/6 mx-auto">or</div>
                        <div className="flex justify-center mb-4">
                            <button
                                className="btn btn-md btn-primary btn-outline w-5/6"
                                onClick={handleSocialLogin}
                            ><FcGoogle className="text-lg"/> google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;