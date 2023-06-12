import {  FaUserCircle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const MyProfile = () => {
    const { user } = useAuth()
    return (
        <div className="w-full flex flex-col items-start mt-3">
            <div className="h-24">
                {
                    user ?
                        <img src={user?.photoURL} alt="user" className="rounded-full border-2 border-slate-600 h-24 "/>
                        : <FaUserCircle className="text-8xl" />
                }
           </div>
            <div>
            <h2>Name: { user?.displayName}</h2>
            <p>Email: {user?.email}</p>
            <p>Role: {user?.role}</p>
            </div>
        </div>
    );
};

export default MyProfile;