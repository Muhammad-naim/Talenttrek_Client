import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../../../components/checkOutForm/CheckOutForm";
import { useLocation } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHED_KEY)

const Payment = () => {
    const location = useLocation()
    const course = location.state;
    return (
        <div className="">
            <h2 className="text-xl my-3 font-semibold border-b-2 pb-1">Payment</h2>
            <div className=" mb-3">
                <h2>Course Name: {course.name}</h2>
                <p>Price: ${course.price}</p>
            </div>
            <small>Please enter your card information to proceed.</small>
            <Elements stripe={stripePromise}>
                <CheckOutForm course={course}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;