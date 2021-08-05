interface Props {
    i: number, 
    selected: boolean,
    item: string,
    selectHandler(i: number) : void,
}

export default function MenuNavItem(props: Props) {
    console.log(props.selected);

    function onSelect() {
        props.selectHandler(props.i);
    }

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
                onClick={onSelect}
            >
                <h6>{props.item}</h6>
            </div>
        </div>
    )
}