import React, { useState } from 'react'
import './EventCard.css'

const EventCard = (props) => {
    const { event } = props;
    const [isFav, setIsFav] = useState(false);
    const [favorites, setFavorites] = useState([]);

    const handleChangeFav = () => {
        setIsFav(!isFav);
    }

    return (
            <div className="temp" style={{backgroundImage: `url(${event.image})`}}>
                <div className="date-border"><div className="event-date">{event.date.split('.', 1)}</div></div>
                <div className={"fav" + (isFav ? ' fav-pressed' : '')} onClick={handleChangeFav} />
                <div className="event-name">{event.name}</div>
            </div>
    )
};
export default EventCard;