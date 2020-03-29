
import React, { Component } from 'react';
import {connect} from 'react-redux';


class EditProfile extends Component {
    //sets local state for newly edited fields
  state = {
    newUsername: '',
    newDescription: '',
    newZip: '',
    // userId: this.props.user.id
  }
  // componentDidMount = ()=>{
  //     console.log('in component did mount edit profile', this.user.id)
  //    //dispatch to saga to then run get request and store in Redux
  //   this.props.dispatch({ type: 'GET_ONE_USER', payload: this.user.id });
  // }

  componentDidUpdate = (prevProps)=>{
    //when redux props update this will compare previous redux state to current and run accordingly
    if (this.props.reduxState.oneUser !== prevProps.reduxState.oneUser){
      const user = this.props.reduxState.oneUser;
      //set local state based on Redux state
      this.setState({
        newUsername: user.username,
        newDescription: user.description,
        newZip: user.zip
      })
    }
  }


  handleChange = (propertyName, event)=>{
    //update local state as user inputs changes
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    })
  }

  handleSave = (id)=>{
    //on clicking save: dispatch to saga to trigger post request that will update user info
    this.props.dispatch({type: 'UPDATE_PROFILE', payload: this.state})
    console.log('in handle save', id)
    //step back to details page
    this.props.history.goBack();
  }

  goBack = () => {
    //navagate back to previous page
    this.props.history.goBack();
}

  // Renders app on the DOM
  render() {
    return (
      <div className="Edit">
        <button className="cancel" onClick={this.goBack}>CANCEL</button>
        <button className="save" onClick={() => this.handleSave(this.state)}>SAVE CHANGES</button>
        <br></br>
        <label> Update Username: 
          <input className="username" type="text" value={this.state.newUsername} 
                 onChange={(event)=>{this.handleChange('newUsername', event)}}></input>
        </label>
        <br></br>
        <label>Update Description: 
          <br></br>
          <textarea className="description" rows="6" type="text" value={this.state.newDescription} 
                 onChange={(event)=>{this.handleChange('newDescription', event)}}></textarea>
        </label>
        
        <br></br>
        <label>Update Zip: 
          <br></br>
          <textarea className="zip" type="text" value={this.state.newZip} 
                 onChange={(event)=>{this.handleChange('newZip', event)}}></textarea>
        </label>
          
      </div>
    );
  }
}

//redux shares state with props
const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(EditProfile);