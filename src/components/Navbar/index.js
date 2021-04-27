import React from 'react';
import Logo from '../../images/logo.svg';
import './App.css'

import {
    Nav, 
    NavLink, 
    Bars, 
    NavMenu,
    NavBtn, 
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to ="/main">
                    <img className="logo-container" src={Logo} alt="logo"/>
                    <h1 className="font1">Documentor</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink className="font2" to="/main" >
                    หน้าหลัก
                </NavLink>
                
                <NavBtnLink className="font2" to='/signin'>เข้าสู่ระบบ</NavBtnLink> 
            </NavMenu>
            <NavBtn>
                {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink>  */}
            </NavBtn>
        </Nav>
        </>
    )
}

export default Navbar;
