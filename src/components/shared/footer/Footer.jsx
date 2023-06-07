import { FaEnvelope, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo.png'
const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img src={logo} className='w-24' />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
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