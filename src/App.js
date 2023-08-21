import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')  //Whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#041d41"
      showAlert("Dark mode is enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is enabled", "success")
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText='About TextUtils'/> */}
      
      <Navbar title='TextUtils' mode={mode} toggleMode={toogleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm heading="Enter your text to analyze below" mode={mode} showAlert={showAlert}/>
        {/* {<About/>} */}
      </div>
    </>
  );
}

export default App;
