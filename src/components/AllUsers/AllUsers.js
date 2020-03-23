import React , {Component} from 'react';
// import UserItem from '../UserItem/UserItem';
import { connect } from 'react-redux';

class AllUsers extends Component {
  // state = {
  //   userList: [
  //     {id: 1, username: 'Kit', message: 'Hi Kyle!'},
  //     {id: 2, username: 'Kyle', message: 'Hi Kit, this is Kyle responding!'},
  //   ],
  // };

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    this.props.dispatch({type: 'GET_USERLIST'});
  }

  sendMessage = () => {
    console.log('in sendmessage');
    this.props.history.push('/conversation');
  }

  render() {
    return (
      <ul>
        {this.props.reduxState.userlist.map((user) => {
          return (<li key={user.id}>{user.username}
          <button onClick={this.sendMessage}>Send Message</button><button onClick={this.removeItem}>BLOCK</button></li>);
          // return (
          //   <UserItem key={userItem.id} userItem={userItem} />
          // )
        })}
      </ul>
    )
  }
} 

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AllUsers);
