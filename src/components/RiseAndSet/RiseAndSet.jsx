import React from 'react'
import Icons from '../../assets/icons/icons'

const RiseAndSet = ({ astro }) => {
    return (
        <div className='bg-card text-center rounded-3 p-2'>
            <h3>Astro</h3>
            <img src={Icons.SunRiseSet} alt="" className='w-50' />
            <div className=''>
                <p className='fs-6'>Sunrise: {astro.sunrise}</p>
                <p className='fs-6'>Sunset: {astro.sunset}</p>
            </div>
        </div>
    )
}

export default RiseAndSet