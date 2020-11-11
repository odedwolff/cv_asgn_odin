import logo from './logo.svg';
import './App.css';
import GenInfo from './components/GenInfo'
import Button2States from './components/Button2States';



function App() {
  
  const call1 = ()=>{console.log("call1")};
  const call2 = ()=>{console.log("call2")};
  
  return(<div>
    <GenInfo isEdit={false}></GenInfo>


    {/* <Button2States label1='label1' label2='label2' call1={call1} call2={call2} butState={1}> </Button2States> */}
  </div>)
  
  
  
  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */


  
}

export default App;
