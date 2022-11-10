import React from 'react'
import { brewers } from "../data/data"

const Brewmethods = () => {
    
    return (
        brewers.map((brewer, key) => (
            <article className='avatar h-32 m-3 flex flex-col justify-center' key={key}>
                <div className="w-28 rounded-full">
                    <img src={brewer.img} />
                </div>
                <p className='text-center'>{brewer.name}</p>
            </article>
        ))
    )
}

export default Brewmethods