import React, { Component } from 'react'
import Address from './Address'


class GenInfo extends Component {
    
    
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

    woForm = (
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
    )

    render(){
        return this.woForm;
    }
    
}

export default GenInfo;