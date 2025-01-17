import React, { useState } from "react";
import ChatLogin from "../components/ChatLogin";
import ChatSpace from "../components/ChatSpace";

function ChatPage() {
  const [userName, setUserName] = useState("");

  return (
    <div className="main" id="wrapper">
      {userName ? (
        <ChatSpace userName={userName} />
      ) : (
        <ChatLogin setUserName={setUserName} />
      )}
    </div>
  );
}

export default ChatPage;