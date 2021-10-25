import React from 'react'
import EventCard from './EventCard'
import './EventList.css'

const EventList = (props) => {
    const { events, city, month } = props;

    const filteredList = () => {
        const newList = events.filter((event) => {
            if(event.city === city && Number(event.date.split('.')[1]) === Number(month)) {
                return true;
            } return false;
        })
        return newList;
    }

    function renderList() {
        const filteredEvents = filteredList();
        if (filteredEvents.length > 0) {
            return (
                <>
                {filteredEvents.map((event) => <EventCard key={event.id} event={event} />)}
                </>
            )
        } else {
            return <p className="no-events">Events not found</p>
        }
    }

    return (
        <div className='wrapper'>
            {renderList()}
        </div>
    )
};
export default EventList;

