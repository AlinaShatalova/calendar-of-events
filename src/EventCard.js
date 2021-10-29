import React, { useContext } from 'react'
import './EventCard.css'
import Context from './context';

const EventCard = (props) => {
    const { addFavorite } = useContext(Context);
    const { event, isFav } = props;

    return (
            <div className="event-card" style={{backgroundImage: `url(${event.image})`}}>
                <div className="event-card__date-border"><div className="event-card__date">{event.date.split('.', 1)}</div></div>
                <div className={"event-card__favorite " + (isFav ? "active" : "")} onClick={() => {addFavorite(event)}} />
                <div className="event-card__name">{event.name}</div>
            </div>
    )
};
export default EventCard;