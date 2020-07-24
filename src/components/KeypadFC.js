import React from 'react'
import { ResultFC } from './ResultFC';
import KeypadButtonFC from './KeypadButtonFC'
//import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import '../cssfiles/Keypad.css'




const KeypadFC = (props) => {

    const [res, stack] = useSelector(state => { return [state.res, state.stack] })
    //const stack = useSelector(state => state.stack)

    const dispatch = useDispatch()

    const reset = () => dispatch({ type: 'RESET' })
    const backspace = () => dispatch({ type: 'BACKSPACE' })
    const calculate = () => dispatch({ type: 'CALCULATE' })
    const operations = (button) => dispatch({ type: 'OPERATIONS', button })
    const inputs = (button) => dispatch({ type: 'INPUTS', button })
    const afterResult = (button) => dispatch({ type: 'AFTERRESULT', button })

    const onClick = (button) => {
        //console.log(props)
        if (button === "=") {
            //props.calculate()
            calculate()
        }

        else if (button === "C" || button==="CE") {
            //props.reset()
            reset()
        }
        else if (button === "Backspace") {
            //props.backspace()
            backspace()
        }
        else {
            if (res === "") {
                //props.inputs(button)
                inputs(button)
            }
            else {
                if (button === "-" || button === "+" || button === "*" || button === "/") {
                    //props.operations(button)
                    operations(button)
                }
                else {
                    //props.afterResult(button)
                    afterResult(button)
                }
            }


        }
    }
    //console.log(props)
    const numbers = ['CE', 'C', 'Backspace', '/', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=']
    const getRow = (rowNumber) => {
        return numbers.slice(4 * rowNumber, 4 * rowNumber + 4).map((value, index) => <KeypadButtonFC key={index} val={value} onClick={onClick} />)
    }
    return (
        <div className = "CalculatorGrid">
            <div className='DisplayPanel'>
                {/*<Result result={this.props.res} stack={this.props.stack} /> */}
                <ResultFC result={res} stack={stack} />
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
                {getRow(5)}
            </div>
        </div>
    )
}

// eslint-disable-next-line no-lone-blocks
{/*
    const mapStateToProps = (state) => {
    //console.log(`yes`+ state.res)
    return {
        res: state.res,
        stack: state.stack
    };
}
*/}
// eslint-disable-next-line no-lone-blocks
{/* const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => dispatch({ type: 'RESET' }),
        backspace: () => dispatch({ type: 'BACKSPACE' }),
        calculate: () => dispatch({ type: 'CALCULATE' }),
        operations: (button) => dispatch({ type: 'OPERATIONS', button }),
        inputs: (button) => dispatch({ type: 'INPUTS', button }),
        afterResult: (button) => dispatch({ type: 'AFTERRESULT', button })
    };
}

const KeypadFCNew = connect(mapStateToProps, mapDispatchToProps)(KeypadFC);
export default KeypadFCNew;

*/}


export default KeypadFC;
