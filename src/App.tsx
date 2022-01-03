import React from 'react';
import { useState } from "react";
import "./App.scss";
import CryptoViewer from "./CryptoViewer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Cryptocurrencies</p>
        <CryptoViewer />
      </header>
    </div>
  );
}

export default App;