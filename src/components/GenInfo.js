import React, { Component } from 'react'
import Address from './Address'
import Button2States from './Button2States'


class GenInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEdit:props.isEdit,
            fldName:"", 
            fldSurName:"", 
            fldDoBirth:undefined, 
            fldAddr:{}
        }

        this.woFormEdit = this.woFormEdit.bind(this);
        this.woFormView = this.woFormView.bind(this);
        this.enterEdit = this.enterEdit.bind(this);
        this.enterView = this.enterView.bind(this);

    }
 
    woFormEdit() { return(
        <div className="col-6 mx-auto mt-5">
                <div className="form-group">
                    <label htmlFor="nameInput">name</label>
                    <input type="text" id="nameInput" className="form-control" value={this.state.fldName}  onChange={(e)=>{this.setState({fldName:e.target.value})}}/>
                    <label htmlFor="surenameInput">sure name</label>
                    <input type="text" id="surenameInput" className="form-control"  value={this.state.fldSurName}  onChange={(e)=>{this.setState({fldSurName:e.target.value})}}/>
                    <label htmlFor="DoBInput">Date of Birth</label>
                    <input type="date" id="DoBInput" className="form-control" value={this.state.fldDoBirth}  onChange={(e)=>{this.setState({fldDoBirth:e.target.value})}}/>
                </div>
                <Address></Address>
        </div>
    )};

    woFormView (){ return( 
        <div>
            {JSON.stringify({
                k1:'v1',
                k2:'v2',
                k3:'v3'
            })}
        </div>


    )};

    enterEdit(){
        this.setState({isEdit:true});
    }

    enterView(){
        this.setState({isEdit:false});
    }

    render(){
        return (
            <div>
              { this.state.isEdit? this.woFormEdit() : this.woFormView()}
              <Button2States label2='Done' label1='Edit' call1={this.enterEdit} call2={this.enterView} butState={this.state.isEdit? 2 : 1}> </Button2States>
         </div>)
    }
    
}

export default GenInfo;