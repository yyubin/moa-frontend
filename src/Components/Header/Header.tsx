import React from 'react';

const Header = () => {
  return (
    <header className='flex-max bg-my-color p-3 pl-40 pr-40'>
      <div>
        <nav  className="flex justify-between items-center">
          <div className='flex-[3] text-5xl font-bold text-logo-color'>
            LOAMOA
          </div>
          <div  className='flex-[3] space-x-4'>
            <input type="text" placeholder='검색어를 입력하세요' className='w-full h-10 rounded-md p-1 mx-auto pl-4' />
          </div>
          <div className='p-4 text-white font-bold'>내 아이디</div>
          <div className='p-4'>
            <a href="/">
              <img src="/img/alarm.png" className='object-fit w-8 h-8'/>
            </a>
          </div>
          <div className='p-4'>
            <a href="/">
            <img src="/img/chat.png"  className='object-fit w-8 h-8'/>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;