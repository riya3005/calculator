import React from 'react'
import './../../cssfiles/ToggleButton.css'

 const DrawerToggleButton = (props) => {
    return (
        <button className="toggle_button" onClick={props.onClickHandler}>
            <div className="toggle_button_lines"></div>
            <div className="toggle_button_lines"></div>
            <div className="toggle_button_lines"></div>
        </button>
    )
}

export default DrawerToggleButton;
