import React, { Component } from 'react'



/***just some playing around to try and understand component life cycle which is a little confusing to me at the moment */


function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}



//this component is static, just renders a date from it props 

class TimeDispayStatic extends React.Component {
    constructor(props) {
        super(props);
        console.log("TimeDispayStatic CTR");

    }

    componentDidMount() {
        console.log("TimeDispayStatic isntance, component did mount ");
    }

    componentWillUnmount() {
        console.log("TimeDispayStatic isntance, component will unmount ")
    }

    render() {
        return <div>
            <h2>Time display static</h2>
            <FormattedDate date={this.props.date} />
        </div>

    }
}


//this components has a clock that changes state ruotinley. it renders using the static components whose static depends on this component's state. my confusion has been wether 
//the child component being created and destoryed with each update of its Props, which is apearently not the case- the CTR gets only being called once, hence, it's the 
//same instance being updates, as far as i can tell 

export default class ClockB8 extends React.Component {
    constructor(props) {
        super(props);
        console.log("ClockB8 CTR");
        this.state = { date: new Date() }
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            this.tick,
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return <div>
            <TimeDispayStatic date={this.state.date} />
        </div>
    }
}

