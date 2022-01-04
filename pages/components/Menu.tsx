import {useEffect, useState} from "react";
import MenuNavItem from './MenuNavItem';
import { menu } from '../../data';

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
                        {menu.map((m, i) =>
                            <MenuNavItem key={i} i={i} selectHandler={setSelected} selected={state.selected === i} item={m.name}/>    
                        )}
                    </div>
                </div>

                <div className="scroll-menu-area">
                    <div className="scroll-menu">
                        {menu[state.selected].items.map((x, i) =>
                            <MenuItem key={i} item={x.item} price={x.price} description={x.description}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
        
    )

}

interface menuItemProps {
    item: string,
    price: number,
    description?: string
}

function MenuItem(props : menuItemProps) {
    console.log(props);
    return(
        <div className="menu-item">
            <div className="menu-item-top">
                <p>{props.item}</p>
                <p>${props.price}</p>
            </div>
            {props.description ?
                <div className="menu-item-bottom">
                    <p>{props.description}</p>
                </div>
            : false}
        </div>
    )
}