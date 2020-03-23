import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserItem extends Component {
    // removeUser = () => {
    //     this.props.dispatch({type: 'DELETE_USER', payload: `${this.props.userItem.id}`});
 
// }

    getAllUsers() {
            this.props.dispatch({type: 'SET_USERLIST'});
    }

    render() {
        return (
            <li>
                <span>{this.props.userItem.user}</span>
                <button onClick={this.removeItem}>BLOCK</button>
                <button onClick={this.sendMessage}>Send Message</button>
            </li>
        )
    }
}

export default connect()(UserItem);