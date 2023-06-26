import React from 'react'
import Icons from '../../assets/icons/icons'
const WeatherIcon = ({ weather, isDay }) => {
  switch (weather) {
    case 'Clear':
      if (isDay) return <img src={Icons.Day} className='w-100 bg-day' alt="" />
      else return <img src={Icons.Night} className='w-100 bg-night' alt="" />
      break;
    case 'Sunny':
    return <img src={Icons.Day} className='w-100 bg-day' alt="" />
  }
}

export default WeatherIcon