import React , {Component} from 'react';

class AllUsers extends Component {
  state= {
    userList: [
      {id: 1, username: 'Kit', message: 'Hi Kyle!'},
      {id: 2, username: 'Kyle', message: 'Hi Kit, this is Kyle responding!'},
    ],
  };

  sendMessage = () => {
    console.log('in sendmessage');
  }

  render() {
    return (
      <div>
        <div>
           <ul>
            {this.state.userList.map(user => 
              <li key={user.id}>
                {user.username}<button className='messageButton' onClick={this.sendMessage}>Send a Message</button></li>
              )}
           </ul>
        </div>
      </div>
    )
  }
} 

export default AllUsers;
