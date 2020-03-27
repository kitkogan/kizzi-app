import React , {Component} from 'react';
import './Conversation.css';
import {connect} from 'react-redux';

//not full working, but newMessage sets state for the newly submitted user messages
//including username, ID, and message text. 
class Conversation extends Component {
    state = {
        newMessage: {
            message_text: '',
            sender_id: '',
            timestamp: ''
        }
    }

    //fires on page load, to get the current messages in the requested user conversation
    componentDidMount() {
        this.getConvo();
    }

    //dispatches the action 'GET_MSG' to the messageSaga, and on to get the stored messages
    //this is currently working for messages on the db
    getConvo = () => {
        console.log('in get convo');
        this.props.dispatch({type: 'GET_MSG', payload: this.props.reduxState.user.id});
    }

    //tracks the message input field,
    //sets state on the new message input text 
    handleMessageChange = (event, propertyName) => {
        console.log('typed message', event.target.value);
        this.setState({
            newMessage: {
               ...this.state.newMessage, 
               [propertyName]: event.target.value
            }
        });
    }

    //the event handler for the sent message action
    handleSentMessage = (event) => {
        event.preventDefault();
        console.log('sent message');
        this.setState({
            newMessage: {
                message_text: '',
                sender_id: '',
                timestamp: ''
            }
        });
       
    }

    //renders the messages to the chat screen for messages
    //between two users
    //input grabs the current text, submit captures the input
    //new messages not yet displaying on DOM
    render () {
        return (
            <>
                 <ul>
                    {this.props.reduxState.msg.map((message) => {
                    return (<li key={message.id}><br></br>{message.message_text}<br></br>{message.username}{message.timestamp}
                    </li>);
                    })}

                 </ul>
              
   
                
                {/* <div className='convoDiv'>
                    <div className='senderDiv'>
                        <p>sender name</p>
                        <p>date, time</p>
                        <p>{this.state.newMessage.message}</p>
                    </div>
                    <div className='recieverDiv'>
                        <p>receiver name</p>
                        <p>date,time</p>
                        <p>{this.state.newMessage.message}</p> */}
                    {/* </div> */}
                   <div>
                    <input value={this.state.newMessage.message} placeholder='type a message' onChange={(event) => this.handleMessageChange(event, 'message')} />
                    <button type='submit' onClick={this.handleSentMessage} className="sentMessageButton">Send</button></div>
                        

                {/* </div>     */}
            </> 
        )   
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(Conversation);