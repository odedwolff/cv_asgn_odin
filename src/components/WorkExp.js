import React, { Component } from 'react'
import {renderObjViewMode} from '../utils/data_print.js'
import Job from './Job'
import Button2States from './Button2States'



class WorkExp extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEdit:props.isEdit,
            isAddingNewJob:false,
            jobs: [],
            dummK: null
        }

        this.renderEdit = this.renderEdit.bind(this);
        this.renderView = this.renderView.bind(this);

    }

    filterData(){
        //console.log(`dateForView, state : ${JSON.stringify(this.state)}`);
        let {isEdit, isAddingNewJob, ...rest} = this.state;
        //console.log(`dateForView, filterd obj : ${JSON.stringify(rest)}`);
        return rest;
    }

    renderEdit(){
        console.log(`entering renderEdit(), state=${this.state}`);
        return <div>
            {/**here comes the list of jobs */}
            {this.state.jobs.map((elm=>{<Job data={elm}></Job>}))}
            
            <button onClick={this.openNewJob.bind(this)}>add new job</button>
            {this.state.isAddingNewJob ?
               <div>
                   <Job data={{}} fSubmit={this.submitNewJob.bind(this)}></Job>
                   <button >done</button>
               </div>
              : null
            }
         
        </div>
    }

    submitNewJob(newJob){
        console.log(`adding new job ${JSON.stringify(newJob)}`);
        this.setState({jobs:[...this.state.jobs, newJob]},  ()=>{console.log(`after adding job, this.state = ${JSON.stringify(this.state)}`);});
        this.setState({isAddingNewJob:false});
    }



    openNewJob(){
        this.setState({isAddingNewJob:true});
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
            <Button2States label2='Done with Work Experience' label1='Edit work exp' call1={this.enterEdit.bind(this)} call2={this.enterView.bind(this)} butState={this.state.isEdit? 2 : 1}> </Button2States>
        </div>)
    }
}


export default WorkExp;