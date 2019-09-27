import React, { Component } from 'react'
import { Route } from 'react-router'
import NavigationBar from './components/NavigationBar'
import LandingPage from './layouts/landing/LandingPage'
import DashboardPage from './layouts/dashboard/DashboardPage'
import SignupPage from './layouts/signup/SignupPage'
import ForgotPage from './layouts/forgot/ForgotPage'
import AccountPage from './layouts/account/AccountPage'
import AdminPage from './layouts/admin/AdminPage'
import ContactPage from './layouts/contact/ContactPage'
import ClubPage from './layouts/club/ClubPage'
import PartnersPage from './layouts/partners/PartnersPage'
import LoginPage from './layouts/login/LoginPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/club" component={ClubPage} />
        <Route exact path="/partners" component={PartnersPage} />
      </div>
    );
  }
}

export default App
