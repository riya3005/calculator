import React from 'react'
import './../../cssfiles/SideDrawer.css'

const SideDrawer = (props) => {
    let sidedrawerclass = "side_drawer"
    if(props.show){
        sidedrawerclass = "side_drawer open"
    }
    return (
        <div className={sidedrawerclass}>
            <nav className="NavigationItem" >
                <ul>
                    <li> <a href="/">Standard</a></li>
                    <li> <a href="/currency">Currency</a></li>
                </ul>
            </nav>
        </div>

    )
}

export default SideDrawer;