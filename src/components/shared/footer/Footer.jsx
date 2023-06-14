import { FaEnvelope, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo.png'
const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img src={logo} className='w-24' />
                    <p>Talenttrek dot com<br />Providing reliable extra-curricular activities support.</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Language club</a>
                    <a className="link link-hover">International services</a>
                    <a className="link link-hover">Special Care</a>
                    <a className="link link-hover"></a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Instructors</a>
                    <a className="link link-hover">Jobs</a>
                    
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4 child:hover:fill-[]">
                        <Link><FaTwitter className='text-2xl' /></Link>
                        <Link><FaFacebook className='text-2xl' /></Link>
                        <Link><FaEnvelope className='text-2xl' /></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;