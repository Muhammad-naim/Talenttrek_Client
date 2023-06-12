import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

const InstructorClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()
    const [instructorClasses, setInstructorClasses] = useState([])
    useEffect(() => {
        axiosSecure(`/instructor-classes/${user?.email}`)
            .then(res => {
                console.log(res.data);
                setInstructorClasses(res.data)
            })
    }, [axiosSecure, user])
    useEffect(() => {
        Aos.init()
    },[])
    const handleDelete = (id) => {
        console.log(id);
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table" >
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>Course</th>
                            <th>Students</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th className="text-center " colSpan={2}>Actions</th>
                            {/* <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructorClasses.length > 0 ? instructorClasses.map((course , index) => {
                                return <tr
                                    key={course?._id}
                                    className="hover:bg-white text-center scro"
                                    data-aos="fade-left"
                                    data-aos-delay={index*50}
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            {course.name}
                                        </div>
                                    </td>
                                    <td >
                                        <span >{course.students}</span>
                                    </td>
                                    <td>{course.status}</td>
                                    <td className="text-center">{course.feedback || "-"}</td>
                                    <td>
                                        <Link
                                            className="capitalize btn btn-ghost btn-xs text-white bg-[#4169E1] hover:bg-[#3251ad]"
                                            to={'/dashboard/update-class'}
                                            state={{ ...course }}
                                        >edit</Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs text-white bg-red-600 hover:bg-red-700" onClick={() => handleDelete(course?._id)}>Delete</button>

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

export default InstructorClasses;