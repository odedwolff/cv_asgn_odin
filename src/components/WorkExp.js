import React, { Component } from 'react'
import {renderObjViewMode} from '../utils/data_print.js'
import Job from './Job'
import Button2States from './Button2States'



class WorkExp extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEdit:props.isEdit,
            jobs: [],
        }
    }

    filterData(){
        //console.log(`dateForView, state : ${JSON.stringify(this.state)}`);
        let {isEdit, ...rest} = this.state;
        //console.log(`dateForView, filterd obj : ${JSON.stringify(rest)}`);
        return rest;
    }

    renderEdit(){
        return <div>
            {/**here come list of jobs */}
            <label>add new job</label>
            <Job></Job>
        </div>
    }

    renderView(){
        <div>
              {renderObjViewMode('Work Expreience', this.filterData(), 0)}
        </div>
    }

    filterData(){
        let {isEdit, ...rest} = this.state;
        return rest;
    }

    enterEdit(){
        this.setState({isEdit:true});
    }

    enterView(){
        this.setState({isEdit:false});
    }


    render(){
        return (
            <div>
            { this.state.isEdit? this.renderEdit() : this.renderView()}
            <Button2States label2='Done' label1='Edit' call1={this.enterEdit.bind(this)} call2={this.enterView.bind(this)} butState={this.state.isEdit? 2 : 1}> </Button2States>
        </div>)
    }
}


export default WorkExp;