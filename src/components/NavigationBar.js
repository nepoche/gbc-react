import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import logo from '../../public/images/logo-dark.png';

import './NavigationBar.css';

class NavigationBar extends Component {

    render() {
        return (
                // <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="club logo"/></Link>
                // <Link to="/landing">Home</Link>
                // <Link to="/club">The Club</Link>
                // <Link to="/partners">Our Partners</Link>
                // <Link to="/contact">Contact Us</Link>
                // <Link to="/login">Login</Link>

            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Link to="/"><img className="logo" src={logo} alt="club logo"/></Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1}>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <Link to="/club">The Club</Link>
                        </NavItem>
                        <NavItem eventKey={3}>
                            <Link to="/partners">Our Partners</Link>
                        </NavItem>
                        <NavItem eventKey={4}>
                            <Link to="/contact">Contact Us</Link>
                        </NavItem>
                        <NavItem eventKey={5}>
                            <Link to="/login">Login</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;

// const NavigationAuth = () => (
//     <ul>
//         <li><Link to={routes.LANDING}>Landing</Link></li>
//         <li><LogoutButton /></li>
//     </ul>
// )

// const NavigationNonAuth = () => (
//     <ul>
//         <li><Link to={routes.LOGIN}>Login</Link></li>
//     </ul>
// )

// const mapStateToProps = (state) => {
//     return { authUser: state.loginReducer };
// };

// export default connect(mapStateToProps)(NavigationBar);