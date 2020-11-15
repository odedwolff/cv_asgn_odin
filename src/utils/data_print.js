import React from 'react'

//print a fomatted object 
export  function printObj(obj, depth){
    const keys = Object.keys(obj);
    return <ul>
         {
                keys.map((k, i)=> <li key={i}>
                                {typeof obj[k] === 'object'? printObj(obj[k], depth + 1) :
                                 <div>
                                    {indent(depth)} <div>{k}</div> <div>{obj[k]}</div>
                                 </div>   }
                            </li>)
        }
    </ul>

};

//indentation 
function indent(depth){
    const indBLock = <div>-@@@-</div>
    const children = [];
    for (var i = 0 ; i < depth ; i++){
        children.push(indBLock);
    }
    return React.createElement('div', null, children);
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
