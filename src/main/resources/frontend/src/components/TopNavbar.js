import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from 'reactstrap'

export default function TopNavbar() {

  const [collapsed, setCollapsed] = useState(true)
  
  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
         <Navbar style={{ background: '#349',  fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}} dark expand="md">
            <NavbarBrand style={{fontSize: '4em', fontStyle: 'normal', fontWeight: 700, color: '#fff', textAlign: 'center', textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073'}} href="/" className="mr-auto navbar-brand">The Game List</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar className="links">
                <NavItem>
                  <Link className="nav-link" to="/">All Games</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/new-game">New Game</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
  )
}