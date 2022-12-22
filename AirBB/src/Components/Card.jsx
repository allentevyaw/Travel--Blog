import person from "../assets/person.png"
import star from "../assets/star.png"


export const Card = (props) => {
let badgetText

if (props.unit.openSpots === 0) {
    badgetText = "SOLD OUT"
} else if (props.unit.location === "Online") {
    badgetText = "ONLINE"
} 

    return (
        <div className="card">
            {badgetText && <div className="card--badge">{badgetText}</div>}
            <img src={props.img} className="card--image" />
            <div className="card--stats">
                <img src={ star } className="card--star" />
                <span>({props.unit.stats.rating})</span>
                <span className="grey">{props.unit.stats.reviewCount}</span>
                <span className="grey">{props.unit.country}</span>
            </div>
            <p>{props.unit.title}</p>
            <p><span className="bold">${props.unit.price}</span> / person</p>
        </div> 
    )
}