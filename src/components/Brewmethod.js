import React from 'react'

const Brewmethod = (props) => {
   
    return (
        <article className='avatar h-32 m-3 flex flex-col justify-center'>
            <div className="w-28 rounded-full">
                <img src={props.img} />
            </div>
            <p className='text-center'>{props.name}</p>
        </article>
    )
}

export default Brewmethod