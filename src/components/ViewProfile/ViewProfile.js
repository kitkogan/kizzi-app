import React , {Component} from 'react';
import {connect} from 'react-redux';

class ViewProfile extends Component {
    
    componentDidMount() {
        this.getProfile();
    }

    //gets the profile of selcted user
    getProfile() {
        this.props.dispatch({ type: 'GET_ONE_USER', payload: this.props.id })
    }

    //go back to all users page when back button is clicked
    buttonClickBack = ()=>{
        this.props.history.goBack();
    }
    //renders app on the DOM
    render() {
        let user = this.props.reduxState.oneUser;
        return(
            <div className="viewUserProfile">
            <button onClick={this.buttonClickBack}>BACK TO LIST</button>
            {/* <button onClick={()=>{this.buttonClickEdit(this.props.match.params.id)}}>EDIT</button> */}
            
            <div className="viewProfileDiv">
                <h3>{user.username}</h3>
                <p>{user.description}</p>
                <p>{user.dob}</p>
                <p>{user.sign_name}</p>
                <p>{user.zip}</p>
            </div>
    
          </div> 
        );
      }
    
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(ViewProfile);