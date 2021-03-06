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
  sendMessage = (id) => {
    console.log('in sendmessage');
    this.props.history.push(`/conversation/${id}`);
  }

  //when the 'view profile' button is clicked, the user is router to the 'ViewProfile' component
  toViewProfilePage = (id) => {
    console.log('profile');
        this.props.history.push({pathname: '/viewProfile/:id', payload: id});
  }

  removeUser = (id) => {
    console.log('in delete user')
    this.props.dispatch({type: 'DELETE_USER', payload: id})
  }

  //renders the user list and dynamically appends a 'send message' button and 'block' button (which will function as a delete)
  render() {
    return (
      <ul>
        {this.props.reduxState.userlist.map((user) => {
          return (<li key={user.id}>{user.username}
          <button className="view-profile" onClick={() =>this.toViewProfilePage(user.id)}>View Profile</button>
          <button onClick={() => this.sendMessage(user.id)} className='send-message'>Send Message</button>
          <button onClick={() => this.removeUser(user.id)} className='delete-block-user'>BLOCK</button></li>);
        })}
      </ul>
    )
  }
} 

//expand match logic here (probably need to work into the map abnove)
// if good match show 💖
// if ok match show 👍
//if bad match show 🚫

//symbols for each sign
//aries ♈︎
//taurus ♉︎
//gemini ♊︎
//cancer ♋︎
//leo ♌︎
//virgo ♍︎
//libra ♎︎
//scorpio ♏︎
//sagittarius ♐︎
//capricorn ♑︎
//aquarius ♒︎
//pisces ♓︎
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AllUsers);
