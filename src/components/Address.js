import React, { Component } from 'react'

import Button2States from './Button2States'



class Address extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
            isEdit:false,
            street:"street val", 
            houseNm:"14",
            city:"salem", 
            zipCode:"12345"
        }

        this.changeStreetVal =  this.changeStreetVal.bind(this);
        this.changeHouseNmVal =  this.changeHouseNmVal.bind(this);
        this.changeCityVal =  this.changeCityVal.bind(this);
        this.changeZipCodeVal =  this.changeZipCodeVal.bind(this);

        this.enterEdit =  this.enterEdit.bind(this);
        this.enterView =  this.enterView.bind(this);

        this.editModeContent =  this.editModeContent.bind(this);
        this.viewModeContent =  this.viewModeContent.bind(this);


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

    enterView(){
        this.setState({isEdit:false});
    }


    viewModeContent(){
        return (
            <div>
               {JSON.stringify(  {addreessField:'v1', addreessField3:'v3', addreessField2:'v2' })};
            </div>
        )
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

        /* return (
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
                    <div className="form-group">
                         <Button2States label2='Done' label1='Edit' call1={this.enterEdit} call2={this.enterView} butState={this.state.isEdit? 2 : 1}> </Button2States>
                    </div>
            </div>
        ) */
    }

}

export default Address;