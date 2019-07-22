import React from 'react';
import logo from './logo.svg';
import './App.css';
let background = require('./images/Main1.png');

let styles = {
  root: {
    backgroundImage: 'url(' + background + ')',
    backgroundSize: 'cover',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
};
function App() {
  return (
    <div className="App" style={styles.root}>
      <button className="button">Tìm Hiểu Ngay</button>
    </div>
  );
}

export default App;
