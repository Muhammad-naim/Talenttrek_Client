import useUsers from "../../../hooks/useUsers";
import { FaUserCircle } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const [users, refetch] = useUsers()
    const [axiosSecure]= useAxiosSecure()
    const handleRole = (role) => {
        axiosSecure.patch('/update-role', role)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${role.name} is an ${role?.role} now!`,
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto ">
                <table className="table " >
                    {/* head */}
                    <thead className="sticky top-0  bg-white">
                        <tr className="text-center ">
                            <th className="text-left">User info</th>
                            <th >Role</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length > 0 ? users.map((user) => {
                                return <tr
                                    key={user?._id}
                                    className="hover:bg-white text-center scro"
                                >

                                    <td>
                                        <div className="flex flex-col child:text-left child:ml-0 ">
                                            <div className="w-20">{user.photoURL ? <img src={user.photoURL} className="rounded-sm" /> : <FaUserCircle className="text-7xl mx-auto"/>}</div>
                                            <p className="font-semibold"> {user.name}</p>
                                            <p> {user.email}</p>
                                        </div>
                                    </td>
                                    <td className="text-center">{user.role}</td>
                                    <td className="h-full ">
                                        <div className="flex flex-col gap-2">                                            
                                            <button
                                                className="capitalize btn btn-ghost btn-xs text-white bg-[#4169E1] hover:bg-[#3251ad]"
                                                onClick={() => handleRole({ id: (user?._id),name: user.name, role: "instructor" })}
                                                disabled={user?.role === "instructor"}
                                            >Make Instructor</button>
                                            <button
                                                className="capitalize btn btn-ghost btn-xs text-white bg-[#4169E1] hover:bg-[#3251ad]"
                                                onClick={() => handleRole({ id: (user?._id),name: user.name, role: "admin" })}
                                                disabled={user?.role === "admin"}
                                            > Make Admin</button>
                                        </div>
                                    </td>
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

export default ManageUsers;