import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import store from '../store';

import logo from '../../public/images/club-logo-blockchain.png';
import { auth } from '../firebase';

import './NavigationBar.css';

class NavigationBar extends Component {

    handleLogout = () => {
        auth.doSignOut();
        window.location.reload();
    }

    render() {

        const state = store.getState();
        console.log(state);

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
                        { !state.user.user && 
                            <NavItem eventKey={2}>
                                <Link to="/signup">Sign Up</Link>
                            </NavItem>
                        }
                        { !state.user.user &&
                            <NavItem eventKey={3}>
                                <Link to="/login">Login</Link>
                            </NavItem>
                        }
                        {
                            state.user.user &&
                            <NavItem eventKey={4}>
                                <Link to="/dashboard">Dashboard</Link>
                            </NavItem>
                        }
                        {
                            state.user.user &&
                            <NavItem eventKey={5}>
                                <Link to="/account">Account</Link>
                            </NavItem>
                        }
                        {
                            state.user.user &&
                            <NavItem eventKey={6}>
                                <button style={{marginBottom: "0px"}} onClick={this.handleLogout}>Log out</button>
                            </NavItem>
                        }
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