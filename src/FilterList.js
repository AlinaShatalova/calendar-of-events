import React from 'react'
import './FilterList.css'

const FilterList = (props) => {
    const { cities, months, onCityChange, onMonthChange, onFavChange, isActive, city, month } = props;

    return (
        <div className="filters">
            <label>
                City:
                <select className="filters__select" value={city} onChange={onCityChange}>
                    {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
            </label>
            <label>
                Months:
                <select className="filters__select" value={month} onChange={onMonthChange}>
                    {months.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
                </select>
            </label>
            <button className={"filters__button " + (isActive ? "pressed" : "unpressed")} onClick={onFavChange} >Favorites</button>
        </div>
    )
};
export default FilterList;