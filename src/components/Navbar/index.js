import React from 'react';
import Logo from '../../images/logo.svg';
import './App.css';

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
    const username = localStorage.getItem('username');

    const Userprofile = () => {
        return (
            <div className='user-profile'>
                <p className='user-name'>{username}</p>
                <button
                className="btn-logout"
                onClick={() => {
                  Logout();
                }}
              >
                ออกจากระบบ
              </button>  
            </div>
            
        );
    };

    const Logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <Nav>
            <NavLink to='/main'>
                <img className='logo-container' src={Logo} alt='logo' />
                <h1 className='font1'>Documentor</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink className='font2' to='/'>
                    หน้าหลัก
                </NavLink>
                <NavLink className='font2' to='/services'>
                    แบบฟอร์ม
                </NavLink>
                {username ? (
                    <Userprofile />
                ) : (
                    <NavBtnLink className='font2' to='/signin'>
                        เข้าสู่ระบบ
                    </NavBtnLink>
                )}
            </NavMenu>
            <NavBtn>
                {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink>  */}
            </NavBtn>
        </Nav>
    );
};

export default Navbar;
