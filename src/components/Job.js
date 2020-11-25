import React, { Component } from 'react'
import {renderObjViewMode} from '../utils/data_print.js'
import Button2States from './Button2States'










class Job extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEdit:false,
        }
        if(props.data){
            this.setState({
            fldCompany: props.data.fldCompany ?  props.data.fldCompany : null,
            fldRole:props.data.fldRole ? props.data.fldRole : null ,
            fldFrom:props.data.fldFrom? props.data.fldFrom: null, 
            fldUntil:props.data.fldUntil ? props.data.fldUntil : null,
            fldDesc:props.data.fldDesc ? props.data.fldDesc : null
            });
        }
    }

    filterData(){
        let {isEdit, ...rest} = this.state;
        return rest;
    }


    formEdit(){
        return <div>
        <label htmlFor="company">name</label>
        <input type="text" id="companyInput" className="form-control" value={this.state.fldCompany}  onChange={(e)=>{this.setState({fldCompany:e.target.value})}}/>
        <label htmlFor="role">name</label>
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
        return (
            <div>
                {renderObjViewMode('Job', this.filterData(), 0)}
            </div>
        )
    }

    render(){
        return (
            <div>
              { this.state.isEdit? this.formEdit() : this.formView()}
              <Button2States label2='Done' label1='Edit' call1={this.enterEdit} call2={this.enterView} butState={this.state.isEdit? 2 : 1}> </Button2States>
         </div>)
    }
}


export default Job;