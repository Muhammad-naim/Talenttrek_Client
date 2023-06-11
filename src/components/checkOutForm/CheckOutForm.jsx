import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const CheckOutForm = ({ course }) => {
    const stripe = useStripe();
    const elements = useElements()
    const navigate = useNavigate()
    const { price } = course
    const [paymentFeedback, setPaymentFeedback] = useState('')
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const { user } = useAuth();
    const [transactionId, setTransactionId] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)
    console.log(course);
    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price })
            .then(data => {
                console.log(data);
                setClientSecret(data.data.clientSecret)
            })
    }, [axiosSecure, price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        setIsProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log('[error]', error);
            setPaymentFeedback(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        //
        const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "unknown",
                        email: user?.email || 'unknown'
                    },
                },
            },
        );
        if (confirmationError) {
            setPaymentFeedback(confirmationError.message)
        }
        setIsProcessing(false)
        if (paymentIntent?.status === "succeeded") {
            setTransactionId(paymentIntent?.id)
            const transaction_ID = paymentIntent?.id;
            const paymentData = {
                transactionId,
                price,
                courseID: course._id,
                email: user.email,
                name: course.name
            }
            axiosSecure.post('/payment', paymentData)
                .then(res => {
                    console.log(res.data.insertedId);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Successful!',
                            showConfirmButton: false,
                            timer: 1000
                        })
                        event.target.reset()
                        navigate("/dashboard/enrolled-class")
                    }
                })
        }




    }
    return (
        <form onSubmit={handleSubmit} className="w-2/3 ">
            <CardElement
                className="border rounded-md p-3 mb-2"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },

                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="flex justify-between">
                <button type="submit" className="capitalize btn btn-ghost btn-xs text-white bg-[#4169E1] hover:bg-[#3251ad]" disabled={!stripe || !clientSecret || isProcessing}>
                    Proceed
                </button>
                {
                    paymentFeedback ? <p className="text-red-600">{paymentFeedback}</p> : <></>
                }
            </div>

        </form>
    );
};
CheckOutForm.propTypes = {
    course: PropTypes.object,
};
export default CheckOutForm;