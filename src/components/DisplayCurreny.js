import React from 'react'
import './../cssfiles/CurrencyConvertor.css'

export const DisplayCurreny = (props) => {
    return (
        <div>
            <select value={props.selectedValue} onChange={props.OnChange}>
                {Object.keys(props.exchangeRates).map((curr, index) => {
                    return <option  key={index}>{props.exchangeRates[curr].currency}</option>
                })}
            </select>
        </div>

    )
}
