import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextBox from './components/TextBox';
function App() {
  return(
    <>
      <Navbar title="textutlis" about="About"/>
      <div className = "container my-3">
        {/* <TextBox heading="Enter text here"/> */}
        <About />
      </div>
    </>

  )
}

export default App;
