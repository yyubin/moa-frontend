import React, { useState } from 'react';
import Header from "../Components/Header/Header.tsx"
import Chat from "../Components/Chat/Chat.tsx"
import '../App.css'; // CSS 파일을 임포트


function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => {
      setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <Header onChatButtonClick={openChat} />
      <Chat isOpen={isChatOpen} onRequestClose={openChat} />
      <body className='bg-my-color'>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-3 gap-6 p-6">
          <div className="h-80 bg-dark-color font-bold text-3xl text-white text-left rounded-xl p-4">
            내 파티 신청자
            <hr className='mt-4'></hr>
            <a className='text-lg font-normal'>파티 신청자가 없습니다</a>
          </div>
          <div className="h-80 bg-dark-color font-bold text-3xl text-white text-left rounded-xl p-4 col-span-2">
            내 파티
            <hr className='mt-4'></hr>
            <a className='text-lg font-normal'>가입한 파티가 없습니다.</a>
          </div>
          <div className="bg-dark-color font-bold text-3xl text-white text-left rounded-xl p-4">
            로아 소식
            <hr className='mt-4'></hr>
            <img src='/img/로아 소식 1.png' className='p-2'></img>
            <img src='/img/로아 소식 2.png' className='p-2'></img>
            <img src='/img/로아 소식 3.png' className='p-2'></img>
          </div>
          <div className="bg-dark-color font-bold text-3xl text-white text-left rounded-xl p-4 col-span-2">
            파티 모집글
            <hr className='mt-4'></hr>
            <ul className='font-normal text-lg p-3'>
              <li className='border-b p-3'>
                모집글 1
              </li>
              <li className='border-b p-3'>
                모집글 2
              </li>
              <li className='border-b p-3'>
                모집글 3
              </li>
            </ul>
          </div>
        </div>
      </body>
    </div>
  );
}

export default HomePage;
