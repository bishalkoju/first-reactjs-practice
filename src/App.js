import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React, {useState} from 'react';
function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not 
  const toggleMode= () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#132136'
    }
    else{
        setMode('light');
        document.body.style.backgroundColor = 'white'
      }
    }
  
  return(
    <>
    <Navbar title="textutlis" about="About" mode={mode} toggleMode={toggleMode}/>
      <div className = "container my-3">
        <TextBox heading="Enter text here" mode={mode}/>
        {/* <About /> */}
      </div>
    </>

  )
}

export default App;
