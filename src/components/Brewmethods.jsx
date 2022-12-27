import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BrewerContext } from '../context/BrewerProvider'

const Brewmethods = () => {
    const [devices] = useContext(BrewerContext)
    
    return (
        devices.map((brewer, key) => (
            <Link to={`/brew/${brewer.id}`} key={key} state={ {data: devices[key]} } 
            className='cursor-pointer'>
                <article className='avatar h-32 m-3 flex flex-col justify-center'>
                    <div className="w-28 rounded-full">
                        <img src={brewer.img} alt={`Closeup of ${brewer.name}`} />
                    </div>
                    <p className='text-center'>{brewer.name}</p>
                </article>
            </Link>
        ))
    )
}

export default Brewmethods