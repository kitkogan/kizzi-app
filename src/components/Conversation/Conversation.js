import React , {Component} from 'react';
import './Conversation.css';


class Conversation extends Component {
    state = {
        newMessage: {
            id: '', username: '', message: ''
        },
        messageList : [
            {id: 1, username: 'Kit', message: 'Hi Kyle!'},
            {id: 2, username: 'Kyle', message: 'Hi Kit, this is Kyle responding!'},
        ],
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
                message: ''
            },
            messageList: [...this.state.messageList, this.state.newMessage],
        });
       
    }

    render () {
        return (
            <>
                <ul>{this.state.messageList.map(convo => 
                    <li key={convo.id}>
                    {convo.username} : {convo.message} </li>
                    )}
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
export default Conversation;