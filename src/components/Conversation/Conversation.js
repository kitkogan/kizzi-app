import React , {Component} from 'react';



class Conversation extends Component {
    state = {
        messageList : [
            {id: 1, username: 'Kit', message: 'Hi Kyle!'},
            {id: 2, username: 'Kyle', message: 'Hi Kit, this is Kyle responding!'},
        ],
    }

        
      
    render () {
        return (
            <ul>{this.state.messageList.map(convo => 
                <li key={convo.id}>
                  {convo.username}: {convo.message} </li>
                )}
            </ul>
        )    
    }
}
export default Conversation;