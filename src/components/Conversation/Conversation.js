import React , {Component} from 'react';
import './Conversation.css';
import {connect} from 'react-redux';


class Conversation extends Component {
    state = {
        newMessage: {
            id: '', username: '', message: ''
        }
    }

    componentDidMount() {
        this.getConvo();
    }

    getConvo = () => {
        console.log('in get convo');
        this.props.dispatch({type: 'GET_MSG'});
    }

    handleMessageChange = (event, propertyName) => {
        console.log('typed message', event.target.value);
        this.setState({
            newMessage: {
               ...this.state.newMessage, 
               [propertyName]: event.target.value
            }
        });
    }

    handleSentMessage = (event) => {
        event.preventDefault();
        console.log('sent message');
        this.setState({
            newMessage: {
                id: '', username: '', message: ''
            }
        });
       
    }

    render () {
        return (
            <>
                 <ul>
                    {this.props.reduxState.msg.map((message) => {
                    return (<li key={message.id}>{message.message_text}
                    </li>);
                    })}
                    {/* <li>TEST</li> */}
                 </ul>
                {/* <ul>{this.state.messageList.map(convo => 
                    <li key={convo.id}>
                    {convo.username} : {convo.message} </li>
                    )}
                </ul> */}
   
                
                {/* <div className='convoDiv'>
                    <div className='senderDiv'>
                        <p>sender name</p>
                        <p>date, time</p>
                        <p>{this.state.newMessage.message}</p>
                    </div>
                    <div className='recieverDiv'>
                        <p>receiver name</p>
                        <p>date,time</p>
                        <p>{this.state.newMessage.message}</p>
                    </div> */}
                   <div>
                    <input value={this.state.newMessage.message} placeholder='type a message' onChange={(event) => this.handleMessageChange(event, 'message')} />
                    <button type='submit' onClick={this.handleSentMessage} className="sentMessageButton">Send</button>

                </div>    
            </> 
        )   
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(Conversation);