import React from 'react'
import './EventCard.css'

const EventCard = (props) => {
    const { event } = props;

    return (
            <div className="temp" style={{backgroundImage: `url(${event.image})`}}>
                <div className="date-border"><div className="event-date">{event.date.split('.', 1)}</div></div>
                <div className="fav" />
                <div className="event-name">{event.name}</div>
            </div>
    )
};
export default EventCard;