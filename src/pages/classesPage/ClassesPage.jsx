import useCourses from "../../hooks/useCourses";
import './styles.css'
import { Helmet } from "react-helmet-async";
import ClassesCard from "../../components/shared/classesCard/ClassesCard";
import { useContext } from "react";
import { AuthContext } from "../../firebase/authProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const ClassesPage = () => {
    const [courses, loading] = useCourses()
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const navigate = useNavigate();
    const location = useLocation();
    useScrollTop(location?.pathname)
    const handleselect = course => {
        if (user) {
            const courseID = course._id;
            delete course._id;
            const selectedCourse = { ...course, courseID, user: user.email }
                axiosSecure.post('/book-class', selectedCourse)
                .then(data => {
                    if (data.data.isExist) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Already selected.',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                    if (data.data.insertedId) {
                        console.log(data);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'class selected.',
                            showConfirmButton: false,
                            timer: 1000
                        });
                        
                    }
                })
        }
        else {
            Swal.fire({
                title: 'You need to login first!',
                showCancelButton: true,
                confirmButtonText: 'Login',
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }
    if (loading) {
        return <div className="h-96 flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    return (
        <>
            <div className="grid grid-cols-4">
                <Helmet>
                    <title>classes | talenttrek</title>
                </Helmet>
                {
                    courses.map(course => {
                        return <ClassesCard
                            key={course._id}
                            course={course}
                            handleselect={handleselect}
                        />
                    })
                }
            </div>
        </>

    );
};

export default ClassesPage;