import React from 'react'
import Icons from '../../assets/icons/icons'

const Humidity = ({ humidity }) => {
    return (
        <div className='bg-card text-center rounded-3 p-2'>
            <h3>Humidity</h3>
            <img src={Icons.Wind} alt="" className='w-50'/>
            <p className='fs-2'>{humidity}%</p>
        </div>

    )
}

export default Humidity