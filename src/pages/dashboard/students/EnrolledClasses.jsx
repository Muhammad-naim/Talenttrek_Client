import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const EnrolledClasses = () => {
    const {user} = useAuth()
    const [enrolledCourses, setEnrolledCourses] = useState([])
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure(`/enrolled-classes/${user?.email}`)
            .then(res => {
            setEnrolledCourses(res.data);
        })
    },[axiosSecure, user])




    return (
        <div>
            
        </div>
    );
};

export default EnrolledClasses;