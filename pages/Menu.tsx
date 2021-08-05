import {useEffect, useState} from "react";
import MenuNavItem from './components/MenuNavItem';

const menuItems = [
    "Breakfast",
    "Paninis and Wraps",
    "Sandwiches",
    "Salads",
    "Other"
] 

export default function Menu(props: any) {
     
    const [state, setState] = useState({
        selected: 0
    });

    function setSelected(id: number) {
        setState({selected: id})
    }

    return(
        <div className="menu-area"> 
            <h1>Menu</h1>

            <div className="menu-container">
                <div className="menu-navigation-area">
                    <div className="menu-navigation">
                        <MenuNavItem key={0} i={0} selected={state.selected === 0} item="Paninis"/>
                        <MenuNavItem key={1} i={1} selected={state.selected === 0} item="Paninis"/>
                        <MenuNavItem key={2} i={2} selected={state.selected === 0} item="Paninis"/>
                        <MenuNavItem key={3} i={3} selected={state.selected === 0} item="Paninis"/>                       
                    </div>
                </div>

                <div className="scroll-menu-area">
                    <div className="scroll-menu">
                        {["Gyro", "Pizza", "Fries", "Gyro", "Pizza", "Fries", "Gyro", "Pizza", "Fries", "Gyro", "Pizza", "Fries"].map((x,i) => <MenuItem key={i}/>)}
                    </div>
                </div>
            </div>
        </div>
        
    )

}

function MenuItem() {
    return(
        <div className="menu-item">
            <div className="menu-item-top">
                <h3>{"Gyro"}</h3>
                <h5>$8.95</h5>
            </div>
            <div className="menu-item-bottom">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci dapibus ultrices in iaculis nunc sed.</p>
            </div>
        </div>
    )
}