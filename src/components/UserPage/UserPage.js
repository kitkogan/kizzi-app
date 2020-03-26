import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import EditProfileButton from '../EditProfileButton/EditProfileButton';
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

//landing page for logged-in user
//shows profile information, still need to add the description input and display area
//zodiac assigned id from select menu is showing, but needs to be reformatted to display the 
//name of the sign insteasd of the id number
const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, { props.user.username }!
      <br></br>
      
    </h1>
    <p>zip code: {props.user.zip}</p>
    <p>sign: {props.user.sign}</p>
    {/* <h2> */}
      {/* {props.user.description}</h2> */}
    {/* <p>Your ID is: {props.user.id}</p> */}
    <EditProfileButton className="edit-profile" />
    <LogOutButton className="log-in" />
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
