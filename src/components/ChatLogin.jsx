import { useState } from "react";

const ChatLogin = ({ setUserName }) => {
  const [login, setLogin] = useState("");

  return (
    <div className="form">
      <input
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && setUserName(login)}
        type="text"
        placeholder="Enter your username"
      ></input>
      <button onClick={() => setUserName(login)}>Connect</button>
    </div>
  );
};
export default ChatLogin;