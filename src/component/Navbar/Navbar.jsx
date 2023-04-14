import React, { useState } from 'react';
import styles from './Navbar.module.css'

import { NavLink, Link } from 'react-router-dom';

import { FaBars, FaHome } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { MdLogin } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { BsShop } from 'react-icons/bs';

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)



    return (

        <div className={styles.navbar}>
            <div className={`container ${styles.navbarContent}`}>
                <div className={styles.logo}>
                    <Link to='/' >PINKI SHOP</Link>
                </div>
                <div className={styles.menuWrapper}>
                    {
                        isOpen ?
                            <AiOutlineClose onClick={() => setIsOpen(!isOpen)} className={styles.menuIcon}>ICON</AiOutlineClose>
                            :
                            <FaBars onClick={() => setIsOpen(!isOpen)} className={styles.menuIcon}>ICON</FaBars>
                    }
                    <ul className={`${styles.links} ${isOpen && styles.showLinks}`} >
                        <li className={styles.icons}>
                            <NavLink className={({ isActive }) => isActive && styles.activeLink} to='/' >
                                {isOpen && <FaHome />
                                }HOME
                            </NavLink>
                        </li>
                       <li className={styles.icons}>
                            <NavLink className={({ isActive }) => isActive && styles.activeLink} to='/dashboard'>
                                {isOpen && <RiAdminLine />
                                }DASHBOARD
                            </NavLink>
                        </li>
                        <li className={styles.icons}>
                            <NavLink className={({ isActive }) => isActive && styles.activeLink} to='/products'>
                                {isOpen && <BsShop />
                                }PRODUCTS
                            </NavLink>
                        </li>
                        <li className={styles.icons}>
                            <NavLink className={({ isActive }) => isActive && styles.activeLink} to='/login'>
                                {isOpen && <MdLogin />
                                }LOGIN
                            </NavLink>
                        </li>
                        <li className={styles.icons}>
                            <NavLink className={({ isActive }) => isActive && styles.activeLink} to='/about-us'>
                                {isOpen && <FcAbout />
                                }ABOUT US
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
