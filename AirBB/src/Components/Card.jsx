import person from "../assets/person.png"
import star from "../assets/star.png"


export const Card = (props) => {
let badgetText

if (props.openSpots === 0) {
    badgetText = "SOLD OUT"
} else if (props.location === "Online") {
    badgetText = "ONLINE"
} 

    return (
        <div className="card">
            {badgetText && <div className="card--badge">{badgetText}</div>}
            <img src={props.img} className="card--image" />
            <div className="card--stats">
                <img src={ star } className="card--star" />
                <span>({props.rating})</span>
                <span className="grey">{props.reviewCount}</span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">${props.price}</span> / person</p>
        </div> 
    )
}