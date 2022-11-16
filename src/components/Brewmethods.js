import React from 'react'
import { Link } from 'react-router-dom'
import { brewers } from "../data/data"

const Brewmethods = () => {
    
    return (
        brewers.map((brewer, key) => (
            <Link to={brewer.link} key={key} className='cursor-pointer'>
                <article className='avatar h-32 m-3 flex flex-col justify-center'>
                    <div className="w-28 rounded-full">
                        <img src={brewer.img} />
                    </div>
                    <p className='text-center'>{brewer.name}</p>
                </article>
            </Link>
        ))
    )
}

export default Brewmethods