import React, {Component} from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './UserPage.css'
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

//landing page for logged-in user
//shows profile information, still need to add the description input and display area
//zodiac assigned id from select menu is showing, but needs to be reformatted to display the 
//name of the sign insteasd of the id number
class UserPage extends Component {


  render () {
    return (
      <div>
        <h1 id="welcome">
          Welcome, { this.props.user.username }!
        </h1> 
        <br />
        <img src='./images/the_butchelor.jpg' className='profilePic' alt='nonbinary femme playing guitar'/>
        <p>{this.props.user.description}</p>
        <p>sign: Aquarius</p>
        <p>zip code: {this.props.user.zip}</p>

        
        
        {/* <h2> */}
          {/* {props.user.description}</h2> */}
        {/* <p>Your ID is: {props.user.id}</p> */}
        <button className='edit-profile' onClick={() => {this.props.history.push(`/editProfile/${this.props.user.id}`)}}>Edit Profile</button> 
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
