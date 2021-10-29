import React from 'react'
import EventCard from './EventCard'
import './EventList.css'

const EventList = (props) => {
    const { events, isFavActive, favorites, city, month } = props;

    const filteredList = () => {
        const newList = events.filter((event) => {
            if(event.city === city && Number(event.date.split('.')[1]) === Number(month)) {
                return true;
            } return false;
        })
        return newList;
    }

    const userFavoriteList = () => {
        const newList = events.filter((event) => {
            if (favorites.includes(Number(event.id))) {
                return true;
            } return false;
        })
        return newList;
    }

    function renderList() {
        const filteredEvents = filteredList();
        if (!isFavActive && filteredEvents.length > 0) {
            return (
                <>
                    {filteredEvents.map((event) => {
                        return <EventCard key={event.id} event={event} isFav={favorites.includes(Number(event.id)) ? true : false} />
                        
                    })}
                </>
            )
        }  else if (isFavActive && favorites.length > 0) {
            const favoriteList = userFavoriteList();
            return (
                <>
                    {favoriteList.map((event) => {
                            return <EventCard key={event.id} event={event} isFav={favorites.includes(Number(event.id)) ? true : false} />                 
                    })}
                </>
            )
        } else {
            return <p className="no-events">Events not found</p>
        }
    }

    return (
        <div className="event-list">
            {renderList()}
        </div>
    )
};
export default EventList;

