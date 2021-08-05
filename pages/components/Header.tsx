export default function Header() {
    return(
        <div className="header-container">
            <div className="header">
                <h1>JJ Cafe</h1>
                <ul>
                    <button className="header-item">
                        Home
                    </button>

                    <button className="header-item">
                        Weekly Specials
                    </button>

                    <button className="header-item">
                        Menu
                    </button>
                </ul>
            </div>
        </div>
    )
}