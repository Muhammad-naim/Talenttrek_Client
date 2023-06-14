import Lottie from "lottie-react";
import notFound from '../../assets/error.json'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
    return (
        <div className="text-center flex-col justify-center items-center mt-12">
            <Helmet>
                    <title>Error | talenttrek</title>
                </Helmet>
             <div className="text-center mx-auto w-1/3">
                        <Lottie animationData={notFound} loop={true} />;
            </div>
            <h2 className="text-5xl font-bold text-red-700">NOT FOUND!</h2>
            <p>Go back to <Link to={'/'} className="hover:text-blue-700">home</Link></p>
        </div>
    );
};

export default ErrorPage;