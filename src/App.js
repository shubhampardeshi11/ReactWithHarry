import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


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

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);

    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#041d41"
      showAlert("Dark mode is enabled", "success")
      // document.title = ("TextUtils - Dark mode is enabled")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is enabled", "success")
      // document.title = ("TextUtils - Light mode is enabled")

    }
  }

  return (
    <>
      <Router>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm heading="Try TextUtils- Word Counter ,Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
