import './App.css';
import React, { useState, useEffect } from 'react';
import FilterList from './FilterList';
import EventList from './EventList';
import Context from './context'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [cities, setCities] = useState([]);
  const months = [
    {id: 1, name: 'January'},
    {id: 2, name: 'February'},
    {id: 3, name: 'March'},
    {id: 4, name: 'April'},
    {id: 5, name: 'May'},
    {id: 6, name: 'June'},
    {id: 7, name: 'July'},
    {id: 8, name: 'August'},
    {id: 9, name: 'September'},
    {id: 10, name: 'October'},
    {id: 11, name: 'November'},
    {id: 12, name: 'December'},
  ];
  const [userCity, setUserCity] = useState('');
  const [userMonth, setUserMonth] = useState('');
  const [userActive, setUserActive] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const getEventInfo = async () => {
    const url = 'https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json';
    
    const response = await fetch(url);
    const json = await response.json();

    const cities = [];
    json.forEach((item) => {
      if (!cities.includes(item.city)) {
        cities.push(item.city);
      }
  });

    setCities(cities);
    setEvents(json);
  }

  // useEffect(() => {
  //   getEventInfo();
  // })

  useEffect(() => {
    getEventInfo().then(() => {
      setUserCity(cities[0]);
      setUserMonth(months[0].id);
      setIsLoading(false);
    })
  });

  const handleChangeCity = (city) => {
    setUserCity(city);
  }

  const handleChangeMonth = (month) => {
    setUserMonth(month);
  }

  function handleFavActive(e) {
    e.preventDefault();
    setUserActive(!userActive);
  }

  function addFavorite(event) {
    let favs;
    const eventId = Number(event.id);
    if (!favorites.includes(eventId)) {
      favs = [...favorites, eventId];
    } else {
      favs = favorites.filter((fav) => fav !== eventId);
    }
    setFavorites(favs);
}

  return (
    <Context.Provider value={{ addFavorite }}>
      <div className="App">
        <h1>Event listing</h1>
        <FilterList 
          cities={cities}
          months={months}
          onCityChange={handleChangeCity}
          onMonthChange={handleChangeMonth}
          onFavChange={handleFavActive}
          isActive={userActive}
          city={userCity}
          month={userMonth}
        />
        {isLoading ? <p className="loading" >Loading...</p> : <EventList 
          events={events}
          isFavActive={userActive}
          favorites={favorites}
          city={userCity}
          month={userMonth}
        />}
      </div>
    </Context.Provider>
  );
}

export default App;
