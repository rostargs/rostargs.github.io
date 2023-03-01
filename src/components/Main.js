import React from "react";
import Card from "./Card";
import data from '../data'

export default function Main(props){

    const cards = data.map(item => {
        return (
            <Card  
            imageUrl={item.imageUrl} 
            title={item.title} 
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            />
        )
    })

    return (
        <main className="main">
            <div className="container">
                <div className="list">
                    {cards}
                </div>
            </div>
        </main>
    )
}