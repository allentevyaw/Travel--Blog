import React from "react";
import mountain from "../assets/mountain.png"
import marker from "../assets/marker.png"

export const Main = (props) => {
    return (
        <div>
            <div className="main--main">
                <img src={mountain} className="main--img"/>
                <div className="main--text">
                    <div className="marker--text">
                        <img src={marker} className="main--marker"/>
                        <h3 className="main--location">{props.item.location}</h3>
                    </div>
                    <h1 className="main--title">{props.item.title}</h1>
                    <h3 className="main--date">{props.item.startDate} - {props.item.endDate}</h3>
                    <p className="main--para">{props.item.description}</p>
                </div>
            </div>
                <hr />
        </div>

    )
}