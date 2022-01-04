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
            id={props.item}
            onClick={onSelect}
        >
            <p>{props.item}</p>
        </div>
    )
}