import React, { Component } from 'react'


class Address extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
            street:"street val", 
            houseNm:"14",
            city:"salem", 
            zipCode:"12345"
        }

        this.changeStreetVal =  this.changeStreetVal.bind(this);
        this.changeHouseNmVal =  this.changeHouseNmVal.bind(this);
        this.changeCityVal =  this.changeCityVal.bind(this);
        this.changeZipCodeVal =  this.changeZipCodeVal.bind(this);
    }

    changeStreetVal(e){
        //verifications  
        this.setState({street:e.target.val});
    }    

    changeHouseNmVal(e){
        //verifications  
        this.setState({houseNm:e.target.val});
    }
    changeCityVal(e){
        //verifications  
        this.setState({city:e.target.val});
    }
    changeZipCodeVal(e){
        //verifications  
        this.setState({zipCode:e.target.val});
    }


    
    
    render(){
        return (
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
                        <button className="btn btn-primary">
                                v
                        </button>
                    </div>
            </div>
        )
    }

}

export default Address;