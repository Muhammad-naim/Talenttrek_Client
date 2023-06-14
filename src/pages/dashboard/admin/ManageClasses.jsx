import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { VscFeedback } from "react-icons/Vsc";
import useAllClasses from "../../../hooks/useAllClasses";
import Swal from "sweetalert2";

const ManageClasses = () => {
    const [classes, refetch] = useAllClasses();
    const [axiosSecure] = useAxiosSecure()
    console.log(classes);
    const handleFeedback =async (id) => {
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Message',
            inputPlaceholder: 'Type your Feedback here...',
            inputAttributes: {
                'aria-label': 'Type your Feedback here'
            },
            showCancelButton: true,
            confirmButtonText: 'Send',
        })

        if (text) {
            // console.log(text);
            const feedback = { feedback: text }
            console.log(feedback);
            axiosSecure.patch('/feedback', { feedback: text, id: id })
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        Swal.fire('Done!', 'Your Feedback has been sent.', 'success')
                        refetch()
                }
            })
        }
    }
    const handleApprove = (status) => {

        axiosSecure.patch('/update-status', status)
            .then(res => {
                console.log(res)
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: status.status,
                        showConfirmButton: false,
                        timer: 1500
                      })
                    refetch()
                }
            })
    }
    return (
        <div>

            <div className="overflow-x-auto ">
                <table className="table " >
                    {/* head */}
                    <thead className="sticky top-0 z-50 bg-white">
                        <tr className="text-center">
                            <th>Course</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th className="text-center " colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.length > 0 ? classes.map((course) => {
                                return <tr
                                    key={course?._id}
                                    className="hover:bg-white text-center scro"
                                >

                                    <td>
                                        <div className="flex flex-col child:text-left  child:ml-0 ">
                                            <div className="w-40 "><img src={course.imageURL} alt="" /></div>
                                            <small className="font-semibold"> {course.name}</small>
                                            <small className="">Instructor: {course.instructor}</small>
                                            <small>Email: {course.email}</small>
                                        </div>
                                    </td>

                                    <td>{course.status}</td>
                                    <td className="text-center">{course.feedback || "-"}</td>
                                    <td className="h-full ">
                                        <div className="flex flex-col gap-2">
                                            <button
                                                onClick={()=>handleApprove({id:course._id, status: "approved"})}
                                                className="capitalize btn btn-ghost btn-xs text-white bg-green-500 hover:bg-green-600"
                                                disabled={course.status !== 'pending'}
                                            >approve
                                            </button>
                                            <button
                                                onClick={()=>handleApprove({id:course._id, status: "denied"})}
                                                className="capitalize btn btn-ghost btn-xs text-white bg-red-600 hover:bg-red-700"
                                                disabled={course.status !== 'pending'}
                                            >deny
                                            </button>
                                            <button className="capitalize btn btn-ghost btn-xs text-white bg-[#4169E1] hover:bg-[#3251ad]" onClick={() => handleFeedback(course?._id)}> <VscFeedback className="text-lg" />Feedback</button>
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

export default ManageClasses;