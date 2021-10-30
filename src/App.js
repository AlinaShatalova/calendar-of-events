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
    {id: 13, name: 'All months'},
  ];

  const [userCity, setUserCity] = useState('');
  const [userMonth, setUserMonth] = useState(String(13));
  const [userActive, setUserActive] = useState(false);
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    getEventInfo();
    }, []);

  const getEventInfo = () => {
    const url = 'https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json';
    
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setEvents(json);

        const cities = [];
        json.forEach((item) => {
          if (!cities.includes(item.city)) {
            cities.push(item.city);
          }
        })
        cities.push('All cities');
        setCities(cities);

        setUserCity(cities[cities.length - 1]);

        let savedFavs = localStorage.getItem('savedFavorites') === null ? [] : JSON.parse(localStorage.getItem('savedFavorites'));
        setFavorites(savedFavs);
      })
      .then(() => setIsLoading(false))
  }

  const handleChangeCity = (e) => {
    setUserCity(e.target.value);
  }

  const handleChangeMonth = (e) => {
    setUserMonth(e.target.value);
  }

  function handleFavActive(e) {
    e.preventDefault();
    setUserActive(!userActive);
    setUserCity(cities[cities.length - 1]);
    setUserMonth(String(13));
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
    localStorage.setItem('savedFavorites', JSON.stringify(favs));
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
