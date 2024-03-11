import React from 'react'
import ChatList from './Chatlist/index';
import ChatContent from './ChatContent/index';
const ChatBody: React.FC = () => {
  return (
    <div className='h-screen w-full flex flex-row px-20 py-10 '>
      <ChatList />
      <ChatContent />
      
    </div>


  )
}

export default ChatBody;