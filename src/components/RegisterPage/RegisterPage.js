import React, { Component } from 'react';
import {connect} from 'react-redux';

//what user sees when they register
class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    dob: '',
    sign: '',
    zip: ''
  };

//checks to make sure all required fields have input 
//throws error if fields are not filled
  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password && this.state.dob && this.state.sign && this.state.zip) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          dob: this.state.dob,
          sign: this.state.sign,
          zip: this.state.zip
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  //handles change on the form inputs
  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  //renders an alert to the user if there is a registration error
  //holds the registration form elements
  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
            
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>  
          </div>
          <div>
            <label htmlFor="dob">
              date of birth:
              <input
                type="dob"
                name="dob"
                value={this.state.dob}
                onChange={this.handleInputChangeFor('dob')}
              />
            </label>
            </div>
          <div>
            <label htmlFor="sign">              
              Zodiac Sign:
              <select value={this.state.sign}
                onChange={this.handleInputChangeFor('sign')}>
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
              </select>
            </label>
            <br></br>
            
            <div>
            <label htmlFor="zip">
              zip:
              <input
                type="zip"
                name="zip"
                value={this.state.zip}
                onChange={this.handleInputChangeFor('zip')}
              />
            </label>  
          </div>    
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

