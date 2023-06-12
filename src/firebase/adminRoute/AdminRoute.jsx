import { Navigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import PropTypes from 'prop-types';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    if (loading || isAdminLoading) {
        return <div className="w-full flex justify-center my-8">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/"  replace></Navigate>
};
AdminRoute.propTypes = {
    children: PropTypes.node,
};
export default AdminRoute;