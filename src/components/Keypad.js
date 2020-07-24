import React, { Component } from 'react'
//import KeypadNumberButton from './KeypadNumberButton'
//import Result from './Result';
import '../cssfiles/Keypad.css'
import {connect} from 'react-redux'
import { ResultFC } from './ResultFC';
import {KeypadButtonFC} from './KeypadButtonFC'

class Keypad extends Component {
    /*state = {
        stack: "",
        res: ""
    }
    */
    onClick = (button) => {
        if (button === "=") {
            this.props.calculate(button)
        }

        else if (button === "Clr"){
            this.props.reset()
        }
        else if (button === "Bks") {
            this.props.backspace()
        }
        else {
            if (this.props.res === "") {
                /*this.setState({
                    stack: this.state.stack + button
                })*/
                this.props.inputs(button)
            }
            else {
                if (button === "-" || button === "+" || button === "*" || button === "/") {
                    /*this.setState({
                        stack: this.state.res + button,
                        res:""
                    })*/
                    this.props.operations(button)
                }
                else {
                    /*this.setState({
                        stack: button,
                        res: ""
                    })*/
                    this.props.afterResult(button)
                }
            }


        }
    }

    /*calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                res: (eval(this.state.stack))
            })
        } catch (e) {
            this.setState({
                res: "error"
            })

        }
    };
    */

    /* reset = () => {
        this.setState({
            res: "",
            stack: ""
        })
    };
    */

    /* backspace = () => {
        this.setState({
            stack: this.state.stack.slice(0, -1),
            res:""
        })
    };
    */

    render() {
        const numbers = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', 'Clr', 'Bks', '/']
        const getRow = (rowNumber) => {
            return numbers.slice(4 * rowNumber, 4 * rowNumber + 4).map((value, index) => <KeypadButtonFC key={index} val={value} onClick={this.onClick} />)
        }
        return (
            <div className='Parent'>
                <p> <b> Simple Calculator </b></p>
                <div className='DisplayPanel'>
                    {/*<Result result={this.props.res} stack={this.props.stack} /> */}
                    <ResultFC result={this.props.res} stack={this.props.stack}/>
                </div>
                <div className='Keypad'>
                    {getRow(0)}
                </div>
                <div className='Keypad'>
                    {getRow(1)}
                </div>
                <div className='Keypad'>
                    {getRow(2)}
                </div>
                <div className='Keypad'>
                    {getRow(3)}
                </div>
                <div className='Keypad'>
                    {getRow(4)}
                </div>
                <div>
                    <KeypadButtonFC val='=' onClick={this.onClick} />
                </div>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        res: state.res,
        stack: state.stack
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => dispatch({ type: 'RESET' }),
        backspace: () => dispatch({ type: 'BACKSPACE' }),
        calculate: () => dispatch({ type: 'CALCULATE' }),
        operations: (button) => dispatch({ type: 'OPERATIONS', button }),
        inputs: (button) => dispatch({ type: 'INPUTS', button }),
        afterResult : (button) => dispatch({ type: 'AFTERRESULT', button })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Keypad)
