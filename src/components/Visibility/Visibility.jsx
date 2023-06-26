import React from 'react'

const Visibility = ({ visibility }) => {
    return (
        <div className='bg-card text-center rounded-3 p-2'>
            <h3>Visibility</h3>
            <p className='fs-2'>{visibility}</p>
        </div>

    )
}

export default Visibility