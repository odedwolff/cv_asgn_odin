import React, { Component } from 'react'

import Button2States from './Button2States'

import {renderObjViewMode} from '../utils/data_print.js'




class Address extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
            isEdit:false,
            street: props.data.street ?  props.data.street : null,
            houseNm:props.data.houseNm ? props.data.houseNm : null ,
            city:props.data.city? props.data.city: null, 
            zipCode:props.data.zipCode ? props.data.zipCode : null
        }

        this.changeStreetVal =  this.changeStreetVal.bind(this);
        this.changeHouseNmVal =  this.changeHouseNmVal.bind(this);
        this.changeCityVal =  this.changeCityVal.bind(this);
        this.changeZipCodeVal =  this.changeZipCodeVal.bind(this);

        this.enterEdit =  this.enterEdit.bind(this);
        this.enterView =  this.enterView.bind(this);

        this.editModeContent =  this.editModeContent.bind(this);
        this.filterData =  this.filterData.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    changeStreetVal(e){
        //verifications  
        this.setState({street:e.target.value});
    }    

    changeHouseNmVal(e){
        //verifications  
        this.setState({houseNm:e.target.value});
    }
    changeCityVal(e){
        //verifications  
        this.setState({city:e.target.value});
    }
    changeZipCodeVal(e){
        //verifications  
        this.setState({zipCode:e.target.value});
    }


    enterEdit(){
        this.setState({isEdit:true});
    }

    

    //ie, submit edited info 
    enterView(){
        this.setState({isEdit:false});
        this.handleSubmit(this.filterData());
    }


    filterData(){
        console.log(`dateForView, state : ${JSON.stringify(this.state)}`);
        let {isEdit, ...rest} = this.state;
        console.log(`dateForView, filterd obj : ${JSON.stringify(rest)}`);
        return rest;
    }


    viewModeContent(){
        return (
            <div>
                {renderObjViewMode('Address', this.filterData(), 0)}
            </div>
        )
    }

    handleSubmit(value){
        this.props.fSubmit(value);
    }

    editModeContent(){
        return(
        <div className="col-6 mx-auto mt-5">
                    <div className="form-group">
                        <label htmlFor="streetInput">street</label>
                        <input value = {this.state.street} type="text" id="streetInput" className="form-control" onChange={this.changeStreetVal}/>
                        <label htmlFor="HouseNmInput">house num</label>
                        <input value = {this.state.houseNm} type="number" id="HouseNmInput" min="0" className="form-control" onChange={this.changeHouseNmVal}/>
                        <label htmlFor="cityInput">city</label>
                        <input value = {this.state.city} type="text" id="cityInput" className="form-control" onChange={this.changeCityVal}/>
                        <label htmlFor="ZipInput" >zip code</label>
                        <input value = {this.state.zipCode} type="number" id="ZipInput" className="form-control" pattern="[0-9]{5}" titel="five digits zip code"
                         onChange={this.changeZipCodeVal}/>
                    </div>
        </div>
        )
    }
    
    render(){
        return (
        <div>
            {this.state.isEdit ? this.editModeContent() : this.viewModeContent()}
            <div className="form-group">
                <Button2States label2='Done' label1='Edit' call1={this.enterEdit} call2={this.enterView} butState={this.state.isEdit? 2 : 1}> </Button2States>
            </div>
        </div> )

    }

}

export default Address;