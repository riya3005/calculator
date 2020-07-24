import React from 'react'

const KeypadButtonFC = (props) => {
    return (
        <div>
            <button name={props.val} onClick={e => props.onClick(e.target.name)}> {props.val} </button>
        </div>
    )
}

export default KeypadButtonFC
