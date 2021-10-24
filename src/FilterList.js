import React from 'react'
import './FilterList.css'

const FilterList = (props) => {
    const { cities, months, onCityChange, onMonthChange, city, month } = props;

    const handleChangeCity = (e) => onCityChange(e.target.value);
    const handleChangeMonth = (e) => onMonthChange(e.target.value);

    return (
        <form>
            <label>
                City:
                <select value={city} onChange={handleChangeCity}>
                    {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
            </label>
            <label className='select'>
                Months:
                <select value={month} onChange={handleChangeMonth}>
                    {months.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
                </select>
            </label>
        </form>
    )
};
export default FilterList;