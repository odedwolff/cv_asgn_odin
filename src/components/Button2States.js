import React, { Component } from 'react'

/***
 * component is a button with 2 states, and 2 transitions (events) between them
 */
/*button has 2 states, labels 1 and 2*/

class Button2States extends Component {
    constructor(props){
        super(props);
        this.state={butState: props.butState};
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        //const newButState= this.state.butState == 1 ?  this.state.butState = 2 : this.state.butState = 1;
        var newButState;
        if(this.state.butState == 1){
            this.props.call1();
            newButState=2;
        }else{
            this.props.call2();
            newButState=1;
        }
        this.setState({butState:newButState});
    }

    render(){
        if(! this.state.butState || (this.state.butState !=1 && (this.state.butState !=2)))
            return <div>Buttonn 2 states componentes must have a butState poerty with value 1 or 2</div>
        const label = this.state.butState ==1 ? this.props.label1 : this.props.label2 ;
        return <div>
                    <button onClick = {this.onClick}>{label}</button>
              </div>
          
       
   }
}

export default Button2States;
