import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    if (loading) {
        return <div className="w-full flex justify-center my-8">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to={"/login"} state={{from: location}} replace></Navigate>
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
};
export default PrivateRoute;