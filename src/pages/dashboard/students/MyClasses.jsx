import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../firebase/authProvider/AuthProvider";
import useBookings from "../../../hooks/useBookings";
import Swal from "sweetalert2";

const MyClasses = () => {
    const { user } = useContext(AuthContext)
    // const token = localStorage.getItem('access-token')
    // const [myBookings, setMyBookings] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/my-bookings?email=${user?.email}`, {
    //         headers: {
    //             "Authorization": `bearar ${token}`
    //         }
    //     }).then(res => res.json()).then(data => setMyBookings(data))
    // },[user,token])
    const [bookings, refetch] = useBookings()
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'class Deleted',
                                showConfirmButton: false,
                                timer: 1000
                            });
                            refetch()
                        }
                    })

            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Instructor</th>
                            <th>payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.length > 0 ? bookings.map((booking, index) => {
                                return <tr
                                    key={booking?._id}
                                >
                                    <th>
                                        {index}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            {booking.name}
                                        </div>
                                    </td>
                                    <td>
                                        <span className="">$ {booking.price}</span>
                                    </td>
                                    <td>{booking.instructor}</td>
                                    <th>
                                        <button className="capitalize btn btn-ghost btn-xs text-white bg-[#4169E1] hover:bg-[#3251ad]">pay</button>
                                    </th>
                                    <th>
                                        <button className="btn btn-ghost btn-xs text-white bg-red-600 hover:bg-red-700" onClick={() => handleDelete(booking?._id)}>Delete</button>
                                    </th>
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

export default MyClasses;