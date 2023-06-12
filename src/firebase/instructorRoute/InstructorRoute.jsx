import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PropTypes from 'prop-types';
import useInstructors from "../../hooks/useInstructors";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructors();

    if (loading || isInstructorLoading) {
        return <div className="w-full flex justify-center my-8">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/"  replace></Navigate>
};
InstructorRoute.propTypes = {
    children: PropTypes.node,
};
export default InstructorRoute;