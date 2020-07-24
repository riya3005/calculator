import React from 'react'

export const ResultFC = (props) => {
    return (
        <div>
            <div className='stackdis'> {props.stack} </div>
            <div className='resultdis'> {props.result} </div>
        </div>
    )
}
