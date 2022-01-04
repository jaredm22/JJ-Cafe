function MenuNav() {
    return(
        <div className="menu-nav">
            <div className="menu-navigation">
                {menu.map((m, i) =>
                    <MenuNavItem key={i} i={i} selectHandler={setSelected} selected={state.selected === i} item={m.name}/>    
                )}
            </div>
        </div>
    )
} export default MenuNav