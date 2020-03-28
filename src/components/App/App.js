import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AllUsers from '../AllUsers/AllUsers';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../MatchedUsers/MatchedUsers';
import ChatMessages from '../ChatMessages/ChatMessages';
import Conversation from '../Conversation/Conversation';
import ViewProfile from '../ViewProfile/ViewProfile';
import EditProfile from '../EditProfile/EditProfile';
import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/allusers will show the list of all registered users.
            This is a route anyone can see, no login necessary */}
            <ProtectedRoute
              exact
              path="/allusers"
              component={AllUsers}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            <ProtectedRoute
              exact
              path="/chatmessages"
              component={ChatMessages}
            />
            <ProtectedRoute
              exact
              path="/conversation"
              component={Conversation}
            />
            <ProtectedRoute
              exact
              path="/viewProfile/:id"
              component={ViewProfile}
            />
            <ProtectedRoute
              exact
              path="/editProfile"
              component={EditProfile}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
