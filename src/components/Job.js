import React, { Component } from 'react'
import {renderObjViewMode} from '../utils/data_print.js'
import Button2States from './Button2States'










class Job extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEdit:false,
            fldCompany: props.data && props.data.fldCompany ?  props.data.fldCompany : "",
            fldRole: props.data && props.data.fldRole ? props.data.fldRole : "" ,
            fldFrom: props.data && props.data.fldFrom? props.data.fldFrom: "", 
            fldUntil: props.data && props.data.fldUntil ? props.data.fldUntil :  "",
            fldDesc: props.data && props.data.fldDesc ? props.data.fldDesc : ""
        }

        this.formEdit = this.formEdit.bind(this);
        this.formView = this.formView.bind(this);

    }

    filterData(){
        let {isEdit, ...rest} = this.state;
        return rest;
    }


    formEdit(){
        return <div>
        <label htmlFor="company">company</label>
        <input type="text" id="companyInput" className="form-control" value={this.state.fldCompany}  onChange={(e)=>{this.setState({fldCompany:e.target.value})}}/>
        <label htmlFor="role">role</label>
        <input type="text" id="roleInput" className="form-control" value={this.state.fldRole}  onChange={(e)=>{this.setState({fldRole:e.target.value})}}/>
        <label htmlFor="company">from</label>
        <input type="date" id="fromInput" className="form-control" value={this.state.fldFrom}  onChange={(e)=>{this.setState({fldFrom:e.target.value})}}/>
        <label htmlFor="company">until</label>
        <input type="date" id="untilInput" className="form-control" value={this.state.fldUntil}  onChange={(e)=>{this.setState({fldUntil:e.target.value})}}/>
        <label htmlFor="company">description</label>
        <input type="text" id="descrptionInput" className="form-control" value={this.state.fldDesc}  onChange={(e)=>{this.setState({fldDesc:e.target.value})}}/>
    </div>
    }

    formView(){
        const data =  this.filterData();
        console.log(`job data=${JSON.stringify(data)}`);
        return (
            
            <div>
                {renderObjViewMode('Job', data, 0)}
            </div>
        )
    }

    enterEdit(){
        this.setState({isEdit:true});
    }

    enterView(){
        let data = this.filterData();
        this.props.fSubmit(data);
        this.setState({isEdit:false});
    }

    render(){
        return (
            <div>
              { this.state.isEdit? this.formEdit() : this.formView()}
              <Button2States label2='Done with Job' label1='Edit Job' call1={this.enterEdit.bind(this)} call2={this.enterView.bind(this)} butState={this.state.isEdit? 2 : 1}> </Button2States>
         </div>)
    }
}


export default Job;