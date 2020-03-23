import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserItem extends Component {
    // removeUser = () => {
    //     this.props.dispatch({type: 'DELETE_USER', payload: `${this.props.userItem.id}`});
 
// }

    // getUsers() {
    //         this.props.dispatch({type: 'SET_USERLIST'});
    // }

    render() {
        let user = this.props.user
        return (
            <div>
                <li>
                    <span>{this.props.userItem.user}</span>
                    <button onClick={this.removeItem}>BLOCK</button>
                    <button onClick={this.sendMessage}>Send Message</button>
                </li>
                <h2>{user.username}</h2>
            </div>
            
        )
    }
}

export default connect()(UserItem);