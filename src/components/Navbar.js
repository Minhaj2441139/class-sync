import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/home">Home</Link></li>
                        <li>
                        <Link href="/">Course</Link>
                        </li>
                        <li><Link href="/aboutus">About Us</Link></li>
                        <li><a>contact</a></li>
                    </ul>
                </div>
                <Link href="/home" className="btn btn-ghost text-xl">ClassSync</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/home">Home</Link></li>
                    <li>
                    <Link href="/">Course</Link>    
                    </li>
                    <li><Link href="/aboutus">About us</Link></li>
                    <li><Link href="/contact">contact us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href="/chatbot" className="btn">ChatGPT</Link>
            </div>
        </div>
    );
};

export default Navbar;