interface Props {
    day: string,
}

export default function Card(props: Props) {
    return(
        <div className="card">
            <div className="card-top">
                <h4>{props.day}</h4>
            </div>
            <div className="card-bottom">
                <h2>Chicken Parm</h2>
                <p>Breaded chicken topped with marinara and parmesan and served on a brioche roll.</p>
            </div>
        </div>
    )
}