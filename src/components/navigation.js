import React from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './css/custom.css';

const NavBar = () => {

    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <h5>Jabong</h5>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#">
                    Women
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Men
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Kids
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Accessories
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Sports
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Home and Living
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Trial
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Juice
                </NavItem>
            </Nav>
        </Navbar>

    )

}

export default NavBar;