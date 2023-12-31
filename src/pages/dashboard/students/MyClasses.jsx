import useBookings from "../../../hooks/useBookings";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyClasses = () => {
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
                fetch(`https://talenttrek-server-muhammad-naim.vercel.app/bookings/${id}`, {
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
            <Helmet>
                <title>My classes | Talenttrek</title>
            </Helmet>
            <h2 className="text-xl font-semibold text-center my-3">My Classes</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Instructor</th>
                            <th colSpan={2} className="">Action</th>
                            {/* <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.length > 0 ? bookings.map((booking, index) => {
                                return <tr
                                    key={booking?._id}
                                    className="hover:bg-white hover:"
                                >
                                    <th>
                                        {index+1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            {booking.name}
                                        </div>
                                    </td>
                                    <td >
                                        <span >$ {booking.price}</span>
                                    </td>
                                    <td>{booking.instructor}</td>
                                    <th>
                                        <Link
                                            className="capitalize btn btn-ghost btn-xs text-white bg-[#4169E1] hover:bg-[#3251ad]"
                                            to={'/dashboard/payment'}
                                            state={{...booking}}
                                        >pay</Link>
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