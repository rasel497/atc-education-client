import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false);

    return (
        <>
            <div className="navbar bg-purple-500">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/event'>Event</Link></li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Partners</summary>
                                    <ul className="p-2 text-black">
                                        <li><Link to='/school'>School</Link></li>
                                        <li><Link to='/country'>Country</Link></li>
                                        <li><Link to='/organization'>Organization</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link to='/tranning'>Traning</Link></li>
                            <li><Link to='/research'>Research</Link></li>
                            <li><Link to='/teams'>Team</Link></li>
                            <li><Link to='/about'>About</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-white">ABC EDUCATION</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/event'>Event</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Partners</summary>
                                <ul className="p-2 bg-slate-500 text-white z-10 rounded-sm mt-5">
                                    <li><Link to='/school'>School</Link></li>
                                    <li><Link to='/country'>Country</Link></li>
                                    <li><Link to='/organization'>Organization</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to='/tranning'>Traning</Link></li>
                        <li><Link to='/research'>Research</Link></li>
                        <li><Link to='/teams'>Team</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='#contact' className="btn bg-purple-500 hover:bg-purple-600 text-white">Our Events</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;