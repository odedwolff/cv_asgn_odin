import React, { Component } from 'react'
import Address from './Address'
import Button2States from './Button2States'


class GenInfo extends Component {
    constructor(props){
        super(props);
        this.state = {isEdit:props.isEdit}

        this.woFormEdit = this.woFormEdit.bind(this);
        this.woFormView = this.woFormView.bind(this);

    }
    
    wForm = (
        <div className="col-6 mx-auto mt-5">
            <form>
                <div className="form-group">
                    <label htmlFor="nameInput">name</label>
                    <input type="text" id="nameInput" className="form-control" />
                    <label htmlFor="surenameInput">sure name</label>
                    <input type="text" id="surenameInput" className="form-control" />

                    <label htmlFor="DoBInput">Date of Birth</label>
                    <input type="date" id="DoBInput" className="form-control" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        V
                   </button>
                </div>
            </form>

            <Address></Address>
        </div>
    )

    woFormEdit() { return(
        <div className="col-6 mx-auto mt-5">
                <div className="form-group">
                    <label htmlFor="nameInput">name</label>
                    <input type="text" id="nameInput" className="form-control" />
                    <label htmlFor="surenameInput">sure name</label>
                    <input type="text" id="surenameInput" className="form-control" />
                    <label htmlFor="DoBInput">Date of Birth</label>
                    <input type="date" id="DoBInput" className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        V
                   </button>
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

    render(){
        return (
            <div>
              { this.state.isEdit? this.woFormEdit() : this.woFormView()}
              <Button2States label2='Edit' label1='View' call1={()=> {this.setState({isEdit:false})}} call2={()=> {this.setState({isEdit:true})}} butState={this.state.isEdit? 1 : 2}> </Button2States>
         </div>)
    }
    
}

export default GenInfo;