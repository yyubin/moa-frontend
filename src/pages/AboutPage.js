import React, { useState } from 'react';
import Header from '../Components/Header/Header.js';
import Sidebar from '../Components/Sidebar/Sidebar.js';
import Chat from "../Components/Chat/Chat.js";

function AboutPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => {
      setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <Header onChatButtonClick={openChat} />
      <Chat isOpen={isChatOpen} onRequestClose={openChat} />
      <body className='bg-my-color'>
        <div className="max-w-screen-2xl mx-auto h-60 flex justify-between items-center p-6 bg-white">
          <div className='flex-[2] font-bold text-2xl text-left p-4'>
              내 아이디
          </div>
          <div className='flex-[2.5] text-2xl space-x-4 p-4'>
            <select className='w-1/2' >
              <option>현재 아이디</option>
              <option>다른 아이디</option>
            </select>
          </div>
          <button className='rounded-lg bg-logo-color p-2'>
            정보수정
          </button>
        </div>
        <hr className="max-w-screen-2xl mx-auto"></hr>
        <div className="flex max-w-screen-2xl mx-auto">
          <Sidebar />
          <div className="flex-1 p-10">

          </div>
        </div>
      </body>
    </div>
  );
}

export default AboutPage;
