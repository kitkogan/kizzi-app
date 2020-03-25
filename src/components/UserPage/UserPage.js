import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import EditProfileButton from '../EditProfileButton/EditProfileButton';
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, { props.user.username }!
      {/* {props.user.zip} */}
    </h1>
    {/* <h2> */}
      
      
      {/* <select>
        <option value="0">Please Select Your Sign</option>
        <option value="1">Capricorn (Dec 22-Jan 20)</option>
        <option value="2">Aquarius (Jan 21-Feb 18)</option>
        <option value="3">Pisces (Feb 19-Mar 20)</option>
        <option value="4">Aries (Mar 21-Apr 20)</option>
        <option value="5">Taurus (Apr 21-May 21)</option>
        <option value="6">Gemini (May 22-Jun 21)</option>
        <option value="7">Cancer (Jun 22-Jun 21)</option>
        <option value="8">Leo (Jul 23-Aug 23)</option>
        <option value="9">Virgo (Aug 21-Sep22)</option>
        <option value="10">Libra (Sep 23-Oct 23)</option>
        <option value="11">Scorpio (Oct 24-Nov 22)</option>
        <option value="12">Sagittarius (Nov 23-Dec 21)</option>
      </select> */}
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
