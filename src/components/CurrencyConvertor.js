import React from 'react'
import KeypadButtonFC from './KeypadButtonFC'
import './../cssfiles/CurrencyConvertor.css'
import './../cssfiles/Keypad.css'
import CurrencyConvertorDisplay from './CurrencyConvertorDisplay'
import { useDispatch } from 'react-redux'

const CurrencyConvertor = (props) => {
    
    const dispatch = useDispatch()

    const reset = () => dispatch({ type: 'RESETCC' })
    const backspace = () => dispatch({ type: 'BACKSPACECC' })
    const inputs = (button) => dispatch({ type: 'INPUTVALUE1', button })
    
    const onClick = (button) => {
        
        if (button === "C" || button==="CE") {
            //props.reset()
            reset()
        }
        else if (button === "Backspace") {
            //props.backspace()
            backspace()
        }
        else{
            inputs(button)
        }
    }

    const numbers = ['CE','C', 'Backspace','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.' ]
    const getRow = (rowNumber) => {
        return numbers.slice(4 * rowNumber, 4 * rowNumber + 4).map((value, index) => <KeypadButtonFC key={index} val={value} onClick={onClick} />)
    }
    return (
        <div className = "CalculatorGrid">
            <div className="DisplayPanelCC">
                <CurrencyConvertorDisplay/>
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
            
        </div>

    )
}

export default CurrencyConvertor;
