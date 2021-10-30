import React from 'react'
import EventCard from './EventCard'
import './EventList.css'

const EventList = (props) => {
    const { events, isFavActive, favorites, city, month } = props;
    
    const filteredList = () => {
        let newList = [];
        if (city === 'All cities' && month === '13') {
            newList = events;
        } else if (city === 'All cities' && month !== '13') {
            newList = events.filter((event) => {
                if (Number(event.date.split('.')[1]) === Number(month)) {
                    return true;
                } return false;
            })
        } else if (city !== 'All cities' && month === '13') {
            newList = events.filter((event) => {
                if (event.city === city) {
                    return true;
                } return false;
            })
        } else {
            newList = events.filter((event) => {
                if (event.city === city && Number(event.date.split('.')[1]) === Number(month)) {
                    return true;
                } return false;
            })
        }
        return newList;
    }

    const filteredEvents = filteredList(); 

    const userFavoriteList = () => {
        const newList = filteredEvents.filter((event) => {
            if (favorites.includes(Number(event.id))) {
                return true;
            } return false;
        })
        return newList;
    }

    function renderList() {
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
                    {favoriteList.length > 0 ? '' : <p className="no-events">Events not found</p>}
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

