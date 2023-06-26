import React from 'react'
import Icons from '../../assets/icons/icons'

const WindStatus = ({ wind }) => {
    return (
        <div className='bg-card text-center rounded-3 p-2'>
            <h3>Wind Status</h3>
            <img src={Icons.Wind} alt="" className='w-50' />
            <p className='fs-2'>{wind}</p>
        </div>

    )
}

export default WindStatus