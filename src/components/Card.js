import React from "react";
import location from '../location.svg'

export default function Card(props){
    return (
        <div className="list__item">
            <div className="list__item-image">
                <img src={props.imageUrl} alt="view" />
            </div>
            <div className="list__item-info">
                <div className="list__item-wrapper">
                    <img className="list__location" src={location} alt="location" />
                    <p className="list__country">{props.location}</p>
                    <a className="list__maps" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="list__title">{props.title}</h1>
                <div className="list__date-wrapper">
                    <span className="list__date">{props.startDate}</span>
                        -
                    <span className="list__date">{props.endDate}</span>
                </div>
                <p className="list__description">{props.description}</p>
            </div>
        </div>
    )
}