import Card from './Card';

export default function WeeklySpecials() {
    return(
        <div className="specials-area">
            <div className="weekly-specials-container">
                <h1>Weekly Specials</h1>

                <div className="card-container">
                    <Card day="Monday"/>
                    <Card day="Tuesday"/>
                    <Card day="Wednesday"/>
                    <Card day="Thursday"/>
                    <Card day="Friday"/>
                </div>
            </div>
        </div>
        
    )
}