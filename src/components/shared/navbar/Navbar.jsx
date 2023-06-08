import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo.png'
import './navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../../../firebase/authProvider/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext)
    const handleLogout = () => {
        
    }
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-100 py-0">
                <div className="navbar-start">
                    <div className="dropdown z-50">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li><Link>Instructor</Link></li>
                            <li><Link>Classes</Link></li>
                            {
                                user ?
                                    <li><Link to={"/"}>Dashboard</Link></li>
                                    : <></>
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="">
                        <img src={logo} className=' w-28' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal child:font-semibold child-hover:bg-none px-1 ">
                        <li className=''><Link to={'/'}>Home</Link></li>
                        <li >
                            <Link to={"/"} >Instructor</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Classes</Link>
                        </li>
                        {
                            user ?
                                <li><Link to={"/"}>Dashboard</Link></li>
                                : <></>
                        }
                    </ul>
                </div>
                <div className="navbar-end ">
                    {
                        user ? <>
                            <div className="tooltip tooltip-left " data-tip={user?.displayName}>
                                <img src={user?.photoURL} alt="user" className="h-8 w-8 rounded-full" />
                            </div>
                            <button onClick={handleLogout} className="ml-3 p-1 rounded bg-ttOrange">Logout</button>
                        </> :
                            <Link to={'/login'} className="btn btn-ghost btn-sm bg-ttOrange">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;