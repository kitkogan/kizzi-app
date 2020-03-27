import React , {Component} from 'react';
// import UserItem from '../UserItem/UserItem';
import { connect } from 'react-redux';


class AllUsers extends Component {
//runs the getUsers function to get the list of all registered users
  componentDidMount() {
    this.getUsers();
  }

  //when called, dispatches the action 'GET_USERLIST' to the userSaga
  getUsers() {
    this.props.dispatch({type: 'GET_USERLIST'});
  }

  //when the 'send message' button is clicked, the user is routed to the 'Conversation' component
  //where they can view past messages and/or send a message to the selected user
  sendMessage = () => {
    console.log('in sendmessage');
    this.props.history.push('/conversation');
  }

  //when the 'view profile' button is clicked, the user is router to the 'ViewProfile' component
  toViewProfilePage = (id) => {
    console.log('profile');
    this.props.history.push(`/viewProfile/${id}`);
  }
  //renders the user list and dynamically appends a 'send message' button and 'block' button (which will function as a delete)
  render() {
    return (
      <ul>
        {this.props.reduxState.userlist.map((user) => {
          return (<li key={user.id}>{user.username}
          <button className="viewProfile" onClick={this.toViewProfilePage}>View Profile</button><button onClick={this.sendMessage}>Send Message</button><button onClick={this.removeUser}>BLOCK</button></li>);
        })}
      </ul>
    )
  }
} 

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AllUsers);
