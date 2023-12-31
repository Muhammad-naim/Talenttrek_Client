import { Link, Outlet, useLocation } from "react-router-dom";
import { FaChalkboardTeacher, FaMoneyCheckAlt, FaPlusCircle, FaUser, FaUsersCog,  } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/Si';
import useScrollTop from "../../hooks/useScrollTop";
import './Dashboard.css'
import useAuth from "../../hooks/useAuth";
const Dashboard = () => {
    const { user, } = useAuth()
    const location = useLocation()
    useScrollTop(location?.pathname)
    useScrollTop()
    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-start justify-start gap-2 pl-3 bg-slate-100">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-xs drawer-button lg:hidden ">{'>'}</label>
                    <div className="w-full relative">
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side lg:top-[72px]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu mt-14 lg:mt-0 p-0 w-56 h-full bg-sky-200 child:border-b child:border-slate-400 child:font-semibold dashbar">
                        {
                            user.role === "student" ?
                                <>
                                    <li><Link to={'/dashboard'}><FaUser />Profile</Link></li>
                                    <li><Link to={'/dashboard/myclasses'}><FaChalkboardTeacher />My Classes</Link></li>
                                    <li><Link to={'/dashboard/enrolled-class'}><SiGoogleclassroom />Enrolled classes</Link></li>
                                    <li><Link to={'/dashboard/history'}><FaMoneyCheckAlt />Payment history</Link></li>
                                </> :                                
                                    user.role === "instructor" ? 
                                    <>
                                    <li><Link to={'/dashboard'}><FaUser />Profile </Link></li>
                                    <li><Link to={'/dashboard/add-class'}><FaPlusCircle />Add class</Link></li>
                                    <li><Link to={'/dashboard/Instructor-classes'}><SiGoogleclassroom />my classes</Link></li>
                                        </> :
                                        <>
                                    <li><Link to={'/dashboard'}><FaUser />Profile</Link></li>
                                    <li><Link to={'/dashboard/manage-classes'}><FaChalkboardTeacher /> Manage Classes</Link></li>
                                    <li><Link to={'/dashboard/manage-users'}><FaUsersCog />Manage Users</Link></li>
                                </>                                 
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;