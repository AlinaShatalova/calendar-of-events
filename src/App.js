import './App.css';
import React, { useState, useEffect } from 'react';
import FilterList from './FilterList';
import EventList from './EventList';

function App() {
  const [events, setEvents] = useState([
    {
      "id": "01",
      "name": "Rave Autumn",
      "date": "14.09.2019",
      "city": "Amsterdam",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/826adbf1a19ba19e6ba9af9308d2b309.png"
    },
    {
      "id": "02",
      "name": "Best of 2019",
      "date": "20.08.2019",
      "city": "Berlin",
      "genre": "Mixed",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/ec3917285ef4db8532c8a9cd9a2112ce.png"
    },
    {
      "id": "03",
      "name": "Faderhead",
      "date": "10.11.2019",
      "city": "Rim",
      "genre": "Electronic",
      "image": "https://cdn3.xsolla.com/files/uploaded/113250/53486baba5ec9d256ce20816a3e54e51.png"
    },
  ]);
  const [cities, setCities] = useState(["Amsterdam", "Berlin", "Rim", "St.Petersburg"]);
  const [months] = useState([
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
  ])
  const [userCity, setUserCity] = useState('');
  const [userMonth, setUserMonth] = useState('');

  // const getEventInfo = async () => {
  //   const url = 'https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json';
  //   const response = await fetch(url);

  //   const json = await response.json();

  //   const cities = [];
  //   json.forEach(item => {
  //     if (cities.indexOf(item.city) === -1) {
  //       cities.push(item.city);
  //     }
  // });

  //   setCities(cities);
  //   setEvents(json);
  // }

  // useEffect(() => getEventInfo());

  const handleChangeCity = (city) => {
    setUserCity(city);
  }

  const handleChangeMonth = (month) => {
    setUserMonth(month);
  }

  return (
    <div className="App">
      <h1>Event listing</h1>
      <FilterList 
        cities={cities}
        months={months}
        onCityChange={handleChangeCity}
        onMonthChange={handleChangeMonth} 
        city={userCity}
        month={userMonth}
      />
      <EventList 
        events={events} 
        city={userCity}
        month={userMonth}
      />
    </div>
  );
}

export default App;
