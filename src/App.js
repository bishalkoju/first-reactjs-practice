import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React, {useState} from 'react';
function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msge : message.charAt(0).toUpperCase() + message.slice(1),
      type : type
    })
    setTimeout(()=>(
      setAlert(null)
    ), 1000)
  }
  const toggleMode= () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#132136'
      showAlert("Dark mode has been enabled","success")
    }
    else{
        setMode('light');
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled","success")
      }
    }
  
  return(
    <>
    <Navbar title="Textutlis" about="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
      <div className = "container my-3">
        <TextBox showAlert={showAlert} heading="Enter text here" mode={mode}/>
        {/* <About /> */}
      </div>
    </>

  )
}

export default App;
