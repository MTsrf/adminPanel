import { Link, NavLink } from "react-router-dom"
import { AiOutlineCloseCircle, AiOutlineDashboard } from 'react-icons/ai'
import { FaAmbulance, FaFirstAid, FaUser, FaUsers } from 'react-icons/fa'
import { TfiBag } from 'react-icons/tfi'
import { IoIosCash } from 'react-icons/io'
import { HiMenu } from 'react-icons/hi'
import { useState } from "react"
const SideBar = ({ show, setShow }) => {
    const activelink = 'nav-link active'
    const normallink = 'nav-link'
    return (
        <>
            <aside className={`sidebar ${show ? 'show' : null}`}>
                <nav className='nav'>
                    <div>
                        <div className="nav-logo">
                            <div className='header-toggle' onClick={() => setShow(!show)}>
                                {
                                    show ?
                                        <AiOutlineCloseCircle className="nav-logo-icon" /> :
                                        <HiMenu className="nav-logo-icon" />
                                }
                            </div>
                            <span className='nav-logo-name'>Home</span>
                        </div>

                        <div className='nav-list'>
                            <NavLink to='/'
                                className={({ isActive }) =>
                                    isActive ? activelink : normallink}
                            >
                                <AiOutlineDashboard className='nav-link-icon' />
                                <span className='nav-link-name'>Dashboard</span>
                            </NavLink>
                            <NavLink to='/doctor'
                                className={({ isActive }) =>
                                    isActive ? activelink : normallink}
                            >
                                <FaUser className='nav-link-icon' />
                                <span className='nav-link-name'>Doctor</span>
                            </NavLink>
                            <NavLink to='/users'
                                className={({ isActive }) =>
                                    isActive ? activelink : normallink}
                            >
                                <FaUsers className='nav-link-icon' />
                                <span className='nav-link-name'>Users</span>
                            </NavLink>
                            <div className="break-points-nav">
                                <NavLink to='/service'
                                    className={({ isActive }) =>
                                        isActive ? activelink : normallink}
                                >
                                    <FaAmbulance className='nav-link-icon' />
                                    <span className='nav-link-name'>Service</span>
                                </NavLink>
                                <NavLink to='/emergency'
                                    className={({ isActive }) =>
                                        isActive ? activelink : normallink}
                                >
                                    <FaFirstAid className='nav-link-icon' />
                                    <span className='nav-link-name'>FirstAid</span>
                                </NavLink>
                                <NavLink to='/payment'
                                    className={({ isActive }) =>
                                        isActive ? activelink : normallink}
                                >
                                    <IoIosCash className='nav-link-icon' />
                                    <span className='nav-link-name'>Payments</span>
                                </NavLink>
                                <NavLink to='/bills'
                                    className={({ isActive }) =>
                                        isActive ? activelink : normallink}
                                >
                                    <TfiBag className='nav-link-icon' />
                                    <span className='nav-link-name'>Bills</span>
                                </NavLink>
                            </div>

                        </div>
                    </div>

                    {/* <Link to='/logout' className='nav-link'>
                        <i className='fas fa-sign-out nav-link-icon'></i>
                        <span className='nav-link-name'>Logout</span>
                    </Link> */}
                </nav>
            </aside>
        </>
    )
}

export default SideBar