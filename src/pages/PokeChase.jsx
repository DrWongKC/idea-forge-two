import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { WebSocketHome } from "../components/WebSocketHome"
import { Login } from "../components/Login"

const PokeChase = () => {
  const [username, setUsername] = useState("")
  return username ? (
    <WebSocketHome username={username} />
  ) : (
    <Login onSubmit={setUsername} />
  )
};

export default PokeChase;
