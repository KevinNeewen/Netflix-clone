import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import Logo from '../Logo'
import './header.scss'

const Header = () => {
    return (
        <header>
            <Nav>
                <NavItem>
                    <Logo />
                </NavItem>
                <NavItem>
                    <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Tv Shows</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Movies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Latest</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">My List</NavLink>
                </NavItem>
            </Nav>
        </header>
    )
}

export default Header
