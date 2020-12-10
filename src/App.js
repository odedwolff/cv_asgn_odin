import logo from './logo.svg';
import './App.css';
import GenInfo from './components/GenInfo'
import WorkExp from './components/WorkExp'
import Button2States from './components/Button2States';
import ClockB8 from './prototypes/Prototypes1'
import jsxToString from 'jsx-to-string';




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
  
  const jsxOut = (<div>
     
    <h2>General Info</h2>
    <GenInfo isEdit={false}></GenInfo> 
    <h2>Work Experience</h2>
    <WorkExp></WorkExp>


    {/* <Button2States label1='label1' label2='label2' call1={call1} call2={call2} butState={1}> </Button2States> */}
  </div>)

//console.log(`app function render output = \n ${jsxToString(jsxOut)}`);

  return jsxOut;
    
}

export default App;
