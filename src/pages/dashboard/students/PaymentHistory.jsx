import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [paymentHistory, setPaymentHistory] = useState([])
    useEffect(() => {
        axiosSecure(`/payment-history/${user.email}`)
            .then(res => {
                if (res.data.length > 0) {
                    setPaymentHistory(res.data)
                }
            })
    }, [user, axiosSecure])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Trasnaction ID</th>
                            <th>Amount</th>
                            {/* <th>Price</th> */}
                            <th>Paid On</th>
                            {/* <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory.length > 0 ? paymentHistory.map((history, index) => {
                                return <tr
                                    key={history?._id}
                                    className="hover:bg-white hover:"
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            {history.transactionId}
                                        </div>
                                    </td>
                                    <td >
                                        <span>$ {history.price}</span>
                                    </td>
                                    <td>{history.date}</td>
                                    {/* <th>
                                        text
                                    </th> */}
                                </tr>

                            })
                                : <tr></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;