import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo.png'
import './navbar.css'

const Navbar = () => {
    const user = false
    return (
        <div>
            <div className="navbar bg-base-100 py-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>                           
                            <li><a>Item 3</a></li>
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
                        user ?
                            <button className='btn btn-ghost btn-sm capitalize bg-ttOrange'>login</button>
                            : <button className='btn btn-ghost btn-sm capitalize bg-ttOrange'>logout</button>
                  }
                </div>
            </div>
        </div>
    );
};

export default Navbar;