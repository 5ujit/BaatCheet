// import React, { useEffect } from 'react'
// import { useChatStore } from '../store/useChatStore'
// import ChatHeader from './ChatHeader'
// import MessageInput from './MessageInput'

// const ChatContainer = () => {
//   const {messages, getMessages, isMessagesLoading,selectedUser}=useChatStore()
//   useEffect(()=>{
//         getMessages(selectedUser._id)
//   },[selectedUser._id,getMessages])

//   if(!isMessagesLoading) return <div>Loading..</div>


  
//   return (
//     <div className='flex-1 flex flex-col overflow-auto'>
//       <ChatHeader/>

//       <p>messages...</p>
//       <div>chat container</div>

//       <MessageInput/>
//     </div>
//   )
// }

// export default ChatContainer
import React from 'react'

const ChatContainer = () => {
  return (
    <div>
      
    </div>
  )
}

export default ChatContainer
