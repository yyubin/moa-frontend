import React, { useState } from 'react';
import { Button, Badge, Modal } from 'antd';
import { CommentOutlined, BellOutlined } from '@ant-design/icons';
import Login from '../Login/Login'

const Header = ({ onChatButtonClick }) => {
   // 예를 들어, 헤더에서 상태를 관리하고 클릭 이벤트를 처리할 수 있습니다.
  const handleChatButtonClick = () => {
    // 채팅 버튼 클릭 시 실행할 동작을 정의합니다.
    if (onChatButtonClick) {
      onChatButtonClick(); // 부모 컴포넌트로 이벤트를 전달합니다.
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleLogin = (values) => {
    console.log('Logging in with:', values);
    // 로그인 처리 로직 추가
    setIsModalVisible(false); // 모달 닫기
  };



  return (
    <header className='flex-max bg-my-color p-10'>
      <div className='max-w-screen-2xl mx-auto'>
        <nav  className="flex justify-between items-center">
          <div className='flex-[2.5] text-6xl font-bold text-logo-color text-left'>
            <a href="/">
            LOAMOA
            </a>
          </div>
          <div  className='flex-[3] space-x-4'>
            <input type="text" placeholder='검색어를 입력하세요' className='w-full h-10 rounded-md p-1 mx-auto pl-4 border border-black' />
          </div>
          <div className='flex-[1] p-4 text-white text-right font-bold'>
            <a href="/about">내 아이디</a>
            <a onClick={showModal}> / 로그인</a>
          </div>
          <div className='p-4'>
            <CommentOutlined style={{ fontSize: '35px', color: 'white' }} onClick={handleChatButtonClick}/>
          </div>
          <div className='p-4' >
            <Badge dot style={{borderColor:'#444A6B', borderWidth: 2,width:16, height:16}} offset={[-9,9]}>
              <BellOutlined style={{ fontSize: '35px', color: 'white' }} />

            </Badge>
          </div>
        </nav>
        <Login
        visible={isModalVisible}
        onCancel={handleCancel}
        onLogin={handleLogin}
      />
      </div>
    </header>
  )
}

export default Header;