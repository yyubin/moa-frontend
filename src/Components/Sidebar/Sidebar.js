import React from "react";

function Sidebar() {
  return (
  <div className="h-screen bg-my-color text-white w-64 p-4 border-r">
    <ul>
      <li className="mb-2"><a href="/about" className="block py-2 px-4 rounded hover:bg-gray-500">내 캐릭터 정보</a></li>
      <li className="mb-2"><a href="#services" className="block py-2 px-4 rounded hover:bg-gray-500">내 파티 현황</a></li>
      <li className="mb-2"><a href="#about" className="block py-2 px-4 rounded hover:bg-gray-500">내가 쓴 글</a></li>
      <li className="mb-2"><a href="#contact" className="block py-2 px-4 rounded hover:bg-gray-500">신청 현황</a></li>
    </ul>

  </div>

  );
}

export default Sidebar;