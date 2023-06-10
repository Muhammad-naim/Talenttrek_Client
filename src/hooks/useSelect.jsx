import { useContext } from "react";
import { AuthContext } from "../firebase/authProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const useSelect = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleselect = course => {
        if (user) {
            const courseID = course._id;
            delete course._id;
            const selectedCourse = { ...course, courseID, user: user.email }
            fetch('http://localhost:5000/book-class', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(selectedCourse)
            })
                .then(res => res.json())
                .then(data => {

                    if (data.insertedId) {
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
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }
    return { handleselect}
};

export default useSelect;