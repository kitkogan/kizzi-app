import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const ChatMessages = () => (
  <div>
    <ul>
      <li>the_butchelor <button className='view-profile'>View Profile</button><button className='send-message'>View Messages</button><button className='delete-block-user'>BLOCK</button></li>
    </ul>
  </div>
);

export default ChatMessages;