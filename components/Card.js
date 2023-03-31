import React from "react"
export default function Main(props){
    return(
            <div className="card">
                <img className="card--img" src={props.item.imageUrl} />
                <div className="card--details">
                    <div className="card--location_info">
                        <i className="fa-solid fa-location-dot"></i>
                        <span className="card--location">{props.item.location}</span>
                        <a href={props.item.googleMapsUrl}>view on google maps</a>
                    </div>
                    <div className="card--other__details">
                        <h1 className="card--details_title">{props.item.title}</h1>
                        <p className="card--details_date">{props.item.startDate} - {props.item.endDate}</p>
                        <p className="card--details_description">{props.item.description}</p>
                    </div>
                </div>
            </div>
    )
}