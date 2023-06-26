import React from 'react'
import Icons from '../../assets/icons/icons'

const UVIndex = ({ uv }) => {
    return (
        <div className='bg-card text-center rounded-3 p-2'>
            <h3>UV Index</h3>
            <img src={Icons.Day} alt="" className='w-50' />
            <p className='fs-2'>{uv}</p>
        </div>
    )
}

export default UVIndex