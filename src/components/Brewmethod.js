import React from 'react'

const Brewmethod = (props) => {
   
    return (
        <article className='card w-3/12 bg-base-100 shadow-xl min-w-min'>
            <figure><img src={props.img} alt="Brew method" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Brew Now</button>
                </div>
            </div>
        </article>
    )
}

export default Brewmethod