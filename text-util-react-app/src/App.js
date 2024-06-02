import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import Alert from './Components/Alert';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  const [mode,setDarkmode]=useState("light");
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type  
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode=(color)=>{ 
    console.log("hehe app.js "+color);
    if(mode!=color){
      setDarkmode(color);
      // document.body.style.backgroundColor='#000000';
      // showAlert('Dark mode enabled','success');
    }
    else{
      setDarkmode('light');
      // document.body.style.backgroundColor='#ffffff';
      // showAlert('Light mode enabled','success');
    }
    console.log("mode is "+mode);
  }

  return (
    <>
    <BrowserRouter>
    <Navbar title='heyo' theme={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

      <Routes>
        <Route exact path='/about' element={<About theme={mode}/>}/>
        <Route exact path='/' element={<TextForm heading='textArea' theme={mode} showAlert={showAlert}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
