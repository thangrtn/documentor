import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav `
    background : transparent;
    height : 80px;
    display : flex;
    justify-content: space-between;
    /* padding: 0.5rem calc((100vw - 1000px) / 2); */
    z-index: 10;  
`;

export const NavLink = styled(Link)`
    color: #FFD089;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
    color: #FFA012;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #FFA012;
    @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    }
`;

export const NavMenu = styled.div `
    display: flex;
    align-items: center;
    /* margin-right: -24px; */

    /* 2nd Nav */
    margin-left : auto;
    
    @media screen and (max-width: 768px) {
    display: none;
    }
`;

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
    display: none;
    
    }
`;

export const NavBtnLink = styled(Link) `
    border-radius: 30px;
    background: #FFA012;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    

    /* 2nd Nav */
    margin-left: 16px;
    
    &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #FFA012;
    }
`;
