import React, { Component } from 'react'
import {renderObjViewMode} from '../utils/data_print.js'
import Job from './Job'
import Button2States from './Button2States'



class WorkExp extends Component {
    constructor(props){
        super(props);
      
        const testJob1= {
            fldCompany: 'compan1',
            fldRole: 'role 1' ,
            fldFrom: 'date from 1', 
            fldUntil:'date from 1',
            fldDesc: 'description1'
        }

        const testJob2= {
            fldCompany: 'compan2',
            fldRole: 'role 2' ,
            fldFrom: 'date from 2', 
            fldUntil:'date from 2',
            fldDesc: 'description2'
        }
        const testJob3= {
            fldCompany: 'compan3',
            fldRole: 'role 3' ,
            fldFrom: 'date from 2', 
            fldUntil:'date from 2',
            fldDesc: 'description2'
        }

        this.state = {
            isEdit:props.isEdit,
            isAddingNewJob:false,
            jobs: [testJob1, testJob2, testJob3],
            dummK: 'dummValInit'
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

    updateElm(i, repElm){
        //clone
        const repJobs = this.state.jobs.concat([]);
        //replace
        repJobs[i] = repElm;
        this.setState({jobs: repJobs});
    }


    removeElm(i){
        const jobsMin = this.state.jobs.concat([]);
        console.log(`removeElm(), i=${i} before rmoeve,arrayy=${JSON.stringify(jobsMin)} `);
        jobsMin.splice(i,1);
        console.log(`after remoe,arrayy=${JSON.stringify(jobsMin)} `);
        this.setState({jobs: jobsMin});
    }

    renderEdit(){
        console.log(`entering renderEdit(), state=${this.state}`);
        return <div>
            {/**here comes the list of jobs */}
            {this.state.jobs.map(((elm, i) =><Job key={i} fSubmit = {this.updateElm.bind(this, i)} fDelete = {this.removeElm.bind(this, i)} data={elm}></Job>))}
            
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
        return (
        <div>
              {renderObjViewMode('Work Expreience', this.filterData(), 0)}
        </div>)
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

    componentDidUpdate(prevProps) {
        //console.log(`component did update. current state= ${JSON.stringify(this.state)}`);
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