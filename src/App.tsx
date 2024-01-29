import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  function handleClick() {
    console.log(window.Telegram);
    console.log(window.Telegram.WebApp);
    console.log(window.Telegram.WebApp.user);
  }

  return (
    <div className="background">
      <p>Lottery</p>
      <div className="main"></div>
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

export default App;
