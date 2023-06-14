import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const EnrolledClasses = () => {
    const { user } = useAuth()
    const [enrolledCourses, setEnrolledCourses] = useState([])
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure(`/enrolled-classes/${user?.email}`)
            .then(res => {
                setEnrolledCourses(res.data);
            })
    }, [axiosSecure, user])
    return (
        <div>
            <Helmet>
                    <title>Enrolled classes | talenttrek</title>
                </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>                
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Enrolled On</th>                            
                            {/* <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledCourses.length > 0 ? enrolledCourses.map((booking, index) => {
                                return <tr
                                    key={booking?._id}
                                    className="hover:bg-white hover:"
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            {booking.name}
                                        </div>
                                    </td>
                                    <td >
                                        <span>{booking.instructor}</span>
                                    </td>
                                    <td>$ {booking.price}</td>
                                    <td>
                                        {booking.date}
                                    </td>
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

export default EnrolledClasses;