import {  FaUserCircle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const MyProfile = () => {
    const { user } = useAuth()
    return (
        <div className="w-full flex flex-col items-center mt-3">
            <div className="h-24">
                {
                    user ?
                        <img src={user?.photoURL} alt="user" className="rounded-full border-2 border-slate-600 h-24 "/>
                        : <FaUserCircle className="text-8xl" />
                }
           </div>
            <h2>{ user?.displayName}</h2>
            <p>{user?.email}</p>
        </div>
    );
};

export default MyProfile;