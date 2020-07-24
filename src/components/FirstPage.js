import React, { Component } from 'react'
import Toolbar from './Toolbar/Toolbar'
//import Keypad from './components/Keypad';
//import KeypadFC from './KeypadFC';
//import { Route, Switch } from 'react-router-dom';
//import CurrencyConvertor from './CurrencyConvertor'
import SideDrawer from './SideDrawer/SideDrawer';
import { Backdrop } from './SideDrawer/Backdrop';
import '../cssfiles/Keypad.css'

class FirstPage extends Component {
state = {
    sideDrawerOpen : false
}
toogleButtonHandler = () => {
    this.setState((prevState) => {
        return {
            sideDrawerOpen : !prevState.sideDrawerOpen
        }
    })
}

backdropHandler = () => {
    this.setState({
        sideDrawerOpen : false
    })
}
    render() {
        let backdrop;
        if(this.state.sideDrawerOpen){
            backdrop = <Backdrop backdropHandler={this.backdropHandler}/>
        }
        return (
            <div className="Parent">
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                <Toolbar onClickHandle = {this.toogleButtonHandler}/>
                <main>
                    {this.props.children}
                </main>
                
            </div>
        )
    }
}

export default FirstPage
