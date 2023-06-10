import { Link, Outlet, useLocation } from "react-router-dom";
import {  FaChalkboardTeacher, FaUser } from 'react-icons/fa';
import {  SiGoogleclassroom } from 'react-icons/Si';
import { Helmet } from "react-helmet-async";
import useScrollTop from "../../hooks/useScrollTop";
const Dashboard = () => {
    const location = useLocation()
    useScrollTop(location?.pathname)
    useScrollTop()
    return (
        <div className="flex justify-start">
            <Helmet>
                <title>Dashboard | Talenttrek</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-start justify-start gap-2 pl-3">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-xs drawer-button lg:hidden">{'>'}</label>
                        <Outlet/>
                    <div>
                        
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-0 pt-2 w-56 h-full bg-sky-200 child:border-b child:border-slate-400 child:font-semibold child:">
                        {/* Sidebar content here */}
                        <li><Link to={'/dashboard'}><FaUser/>Profile</Link></li>
                        <li><Link to={'/dashboard/myclasses'}><FaChalkboardTeacher/>My Classes</Link></li>
                        <li><Link to={'/dashboard/enrolled-class'}><SiGoogleclassroom/>Enrolled classes</Link></li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;