interface Props {
    i: number, 
    selected: boolean,
    item: string
}

export default function MenuNavItem(props: Props) {
    console.log(props.selected);
    return(
        <div 
            className={`menu-nav-item ${props.selected ? "selected" : ""}`}
        >
            <div 
                className={`item-${props.i}`}
                style={props.selected ? 
                    {
                        color: "white",
                        borderRight: "7px solid lightseagreen"
                    } : {}}
                // onClick={() => setState({selected: props.i})}
            >
                <h6>{props.item}</h6>
            </div>
            <ul>
                {["Gyro", "Pizza", "Fries"].map(x => <p>{x}</p>)}
            </ul>
        </div>
    )
}