import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <div className="social">
                            <a className='mr-2' href="https://www.facebook.com/theacteducation" target="_blank" rel="noopener noreferrer"><i className='fab fa-facebook-f icon'></i></a>
                            <a className='mr-2' href="https://www.facebook.com/theacteducation" target="_blank" rel="noopener noreferrer"> <i className='fab fa-linkedin icon'></i></a>
                            <a className='mr-2' href="https://www.facebook.com/theacteducation" target="_blank" rel="noopener noreferrer"><i className='fab fa-twitter icon'></i></a>
                            <a href="https://www.facebook.com/theacteducation" target="_blank" rel="noopener noreferrer"><i className='fab fa-youtube icon'></i></a>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by ATC Academy</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;