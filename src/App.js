import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import React from 'react'
import Alert from './Components/Alert';

function App() {
  const [alert, setAlert] = useState(null);



  const showAlert = (messgae, type) => {
    setAlert({
      msg: messgae,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode, setMode] = useState('light');
  const [btnMode, setBtnMode] = useState('Enable Dark mode');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark Mode has been enabled", "success")
      document.body.style.backgroundColor = 'black';
      setBtnMode('Disbale Dark mode');
    }
    else {
      setMode('light');
      showAlert("Light Mode has been enabled", "success")
      document.body.style.backgroundColor = 'white';
      setBtnMode('Enable Dark mode');
    }
  }
  return (
    <>
      <Navbar title='Text-Utils' mode={mode} toggleMode={toggleMode} btnMode={btnMode} />
      <Alert alert={alert} />

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<TextForm />} />

          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter> */}

      <div>
        <TextForm mode={mode} showAlert={showAlert} />
      </div>

      <About />
    </>
  );
}

export default App;
