import Lottie from "lottie-react";
import loginAmination from '../../assets/login.json'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../firebase/authProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
    const { signInwithpassword, signInWithSocials, googleProvider, } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit,} = useForm();
    const onSubmit = data => {
        signInwithpassword(data?.email, data?.password)
            .then(() =>
                navigate('/')
        )
        .catch(error=>console.log(error.message))
    };
    const handleSocialLogin = () => {
        console.log('licker');
        signInWithSocials(googleProvider)
            .then(() => {
                navigate('/')
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password")}
                                    required className="input input-bordered" />
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
                                className="btn btn-sm btn-outline w-5/6"
                                onClick={handleSocialLogin}
                            >google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;