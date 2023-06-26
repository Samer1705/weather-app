import React from 'react'
import useFetch from '../../hooks/useFetch'
import Icons from '../../assets/icons/icons.js'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
const HourlyWeather = ({ data }) => {
    return (
        <div className='d-flex overflow-x-scroll p-4 test'>
            {data?.forecast.forecastday[0].hour.map((hour, i) => i%3 == 0? (
                <div className='bg-card mx-2 px-4 py-1 text-center shadow rounded-3'>
                    <p>{hour.time.slice(10)} </p>
                    <WeatherIcon weather={hour.condition.text} isDay={hour.is_day}/>
                    <p>{hour.temp_c} C</p>
                </div>
            ) : '')}
        </div>
    )
}

export default HourlyWeather