import logo from './logo.svg';
import './App.css';
import GenInfo from './components/GenInfo'
import Button2States from './components/Button2States';
import ClockB8 from './prototypes/Prototypes1'



/*** CV Form App 
 * Design: idea is to have compnents that are eithr in design or in edit mode. also, i tried to make parent model independant of the structure of their children, for instance, 
 * the Genearl Info section does not have to know which fields in its Adress sub model. 
 * 
 * Implementation: edit mode is quite straight forward AFAICT, for the view mode i have implemented a universal view Util the renders information hirarchy recursevily 
 *  
 * 
 */



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
