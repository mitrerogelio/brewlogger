import React from 'react'

const Description = (props) => {
    console.log(props)
    return (
        <>
            <div className='avatar flex justify-center m-10 w-3/4'>
                <div className='avatar rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                    <img
                        src={props.img}
                        alt='deez'
                    />
                </div>
            </div>
            <div className='card-body'>
                <h2 className='card-title'>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </>
  )
}

export default Description