import React from 'react'
import {colKey, colVal, lisItemKVal, list} from '../styles/style_basic'
import { v4 as uuidv4 } from 'uuid';
import jsxToString from 'jsx-to-string';



//render an object for view 
export  function renderObjViewMode(objName, obj, depth){
    //console.log(`entering renderObjViewMode, obj= ${JSON.stringify(obj)}`);
    const keys = Object.keys(obj);
   const jsx= <div>
            <p>{objName}</p>
            <ul style = {list}>
                {
                       /*  keys.map((k)=> <li key={uuidv4()} style={lisItemKVal}> */
                        keys.map((k)=> <li key={uuidv4()} >

                                            {
                                            //if object field is an object, call recureively
                                            obj[k] && typeof obj[k] === 'object'? renderObjViewMode(k, obj[k], depth + 1) :
                                            <div>
                                                {indent(depth)} <div style={colKey}>{k}</div> <div style={colVal}>{obj[k]}</div>
                                            </div>  
                                            }
                                         </li>)
                }
            </ul>
        </div>
    //console.log(`out from renderObjViewMode() = ${jsxToString(jsx)}`);
    return jsx;

};

//indentation 
function indent(depth){
    const indBLock = <div></div>
    const children = [];
    for (var i = 0 ; i < depth ; i++){
        children.push(indBLock);
    }
    return React.createElement('div', {className:"div_indentation"}, children);
};


export const testObj = {
    k1:'v1',
    k2:'v2',
    k3:'v3',
    emb:{
        embK1:'emb val1',
        embK2:'emb val2',
        embK3:'emb val3',
    },
    k4:'v4',
    k5:'v5',

};
