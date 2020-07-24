import React, { Component } from 'react'


class Result extends Component {
    render() {
        return (
            <div>
                <div className='stackdis'> {this.props.stack} </div>
                <div className='resultdis'> {this.props.result} </div>
            </div>
        )
    }
}

export default Result
