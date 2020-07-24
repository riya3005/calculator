import React from 'react'
import './../../cssfiles/Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const Toolbar = (props) => {
    return (
        <header className="toolbar">
            <nav>
                <DrawerToggleButton onClickHandler={props.onClickHandle} />
            </nav>
        </header>
    )
}

export default Toolbar;