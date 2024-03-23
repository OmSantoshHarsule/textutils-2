import './App.css';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import About from './Components/about';
import React, { useState } from 'react';
import Alert from './Components/alert';
import{BrowserRouter as Router, Route,Link, Routes} from "react-router-dom"; 

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
        setAlert({
          message:message,
          type:type
        })
        setTimeout(()=>{
          setAlert(null);
        },1500);
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");

    }
  }
 
  return(
   <>
   {/*<Navbar title="RentRide" />*/}
   {/*<Navbar/>*/}
   <Router>
   <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container">
    <Routes>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/" element={<TextFrom showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>}></Route>
    </Routes>
    </div>
  </Router>
   </>
  );
}

export default App;