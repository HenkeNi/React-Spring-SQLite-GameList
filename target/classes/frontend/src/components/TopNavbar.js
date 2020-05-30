import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from 'reactstrap'

export default function TopNavbar() {

  const [collapsed, setCollapsed] = useState(true)
  
  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
         <Navbar style={{ background: '#559', fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}} dark expand="md">
            <NavbarBrand style={{fontSize: '1.6em'}} href="/" className="mr-auto navbar-brand">The Game List</NavbarBrand>
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