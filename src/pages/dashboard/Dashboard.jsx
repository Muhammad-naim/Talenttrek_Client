import { Link } from "react-router-dom";
import {  FaChalkboardTeacher, FaUser } from 'react-icons/fa';
import {  SiGoogleclassroom } from 'react-icons/Si';
import { Helmet } from "react-helmet-async";
const Dashboard = () => {
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

                    <div>
                        
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 pt-2 w-56 h-full bg-sky-200 child:text-center">
                        {/* Sidebar content here */}
                        <li><Link><FaUser/>Profile</Link></li>
                        <li><Link><FaChalkboardTeacher/>My Classes</Link></li>
                        <li><Link><SiGoogleclassroom/>Enrolled classes</Link></li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;