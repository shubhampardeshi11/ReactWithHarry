import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')  //Whether dark mode is enabled or not 
  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = "#041d41"

    }
    else {
      setMode('light')
      document.body.style.background = "white"

    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText='About TextUtils'/> */}
      {/* <Navbar/> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toogleMode} />
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze below"  mode={mode}/>
        {/* {<About/>} */}
      </div>
    </>
  );
}

export default App;
