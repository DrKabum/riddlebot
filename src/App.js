
import React from "react";
import { Header } from "./components";
import logoImg from "../images/logo.png"

function App() {
  return (
    <>
      <Header>
        <Header.Logo 
          src={logoImg} 
          alt="kabum" 
        />
        <Header.Title>Riddle Bot - A React game with a Github API</Header.Title>
      </Header>
    </>
  )
}

export default App
