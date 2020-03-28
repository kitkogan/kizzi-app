import React , {Component} from 'react';
import {connect} from 'react-redux';

class ViewProfile extends Component {
    
    componentDidMount() {
        this.getProfile();
    }

    //gets the profile of selcted user
    getProfile(action) {
        console.log('this should be an id', action.payload);
        this.props.dispatch({ type: 'GET_ONE_USER', payload: action.payload })
    }

    //go back to all users page when back button is clicked
    buttonClickBack = ()=>{
        this.props.history.goBack();
    }
    //renders app on the DOM
    render() {
        // let user = this.props.reduxState.oneUser;
        return(
            <div className="viewUserProfile">
            <button className='back-to-list' onClick={this.buttonClickBack}>BACK TO LIST</button>
            {/* <button onClick={()=>{this.buttonClickEdit(this.props.match.params.id)}}>EDIT</button> */}
            
            {/* <div className="viewProfileDiv">
                <h3>{user.username}</h3>
                <p>{user.description}</p>
                <p>{user.dob}</p>
                <p>{user.sign_name}</p>
                <p>{user.zip}</p>
            </div> */}

            <div>
            <h3>the_butchelor</h3>
            <img className='profilePic' src='./images/the_butchelor.jpg'/><button className='send-message'>Send Message</button>
                <p>Handsome, genderqueer Butchelor. Hoping to Marry Rich. Must love cats.</p>
                <p>dob: 01/23/1984</p>
                <p>sign: Aquarius</p>
                <p>zip: 98661</p>
                
            </div>
    
          </div> 
        );
      }
    
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(ViewProfile);