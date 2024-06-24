import React from "react";

const Chat = ({ isOpen, onRequestClose }) => {
  if (!isOpen) return null;

  return (
    <div className="h-40">
      <a href="">chat</a>
    </div>
  );

};

export default Chat;