import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  
  const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Início</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/Zoom/">Zoom</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Meet">Meet</NavLink>
              </NavItem>
            </Nav>
            <NavbarBrand href="/Sobre">Sobre</NavbarBrand>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
export default Headers;
