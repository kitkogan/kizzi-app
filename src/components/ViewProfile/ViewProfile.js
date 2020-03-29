import React , {Component} from 'react';
import {connect} from 'react-redux';

class ViewProfile extends Component {
    
    componentDidMount() {
        this.getProfile();
    }

    // gets the profile of selcted user
    getProfile() {
        let thisId = this.props.history.location.payload;
        this.props.dispatch({ type: 'GET_ONE_USER', payload: thisId })
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
                {JSON.stringify(this.props.reduxState.oneUser)}

                {/* <ul>
                    {this.props.reduxState.oneUser.map((user) => {
                    return (<li key={user.id}>
                        <br></br>
                        {user.username}
                        <br></br>
                        {user.sign_name}{user.zip}{user.dob}{user.description}
                    </li>);
                    })}

                 </ul> */}
            {/* <button className='back-to-list' onClick={this.buttonClickBack}>BACK TO LIST</button> */}
            {/* <button onClick={()=>{this.buttonClickEdit(this.props.match.params.id)}}>EDIT</button> */}
            
            {/* <div className="viewProfileDiv">
                <h3>{this.user.username}</h3>
                <p>{this.user.description}</p>
                <p>{this.user.dob}</p>
                <p>{this.user.sign_name}</p>
                <p>{this.user.zip}</p>
            </div> */}

            <div>
            <h3>kit_rulz</h3>
            <img className='profilePic' src='./images/kit_rulz.jpg'/><button className='send-message'>Send Message</button>
                <p>non-binary femme, here for a good time. Taurus sun, Aries moon, Pisces rising.</p>
                <p>dob: 04/29/1984</p>
                <p>sign: Taurus</p>
                <p>zip: 55409</p>
                
            </div>
    
          </div>  
        );
      }
    
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(ViewProfile);