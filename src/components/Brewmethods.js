import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {db} from '../firebase/firebase-config'
import { collection, getDocs } from '@firebase/firestore'

const Brewmethods = () => {
    const [brewers, setBrewers] = useState([])
  
    const brewersCollectionReference = collection(db, 'brewers')
    useEffect(() => {
        const getBrewers = async () => {
        const data = await getDocs(brewersCollectionReference)
        setBrewers(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }
        getBrewers()
    }, [] )

    return (
        brewers.map((brewer, key) => (
            <Link to={`/brew/${brewer.id}`} key={key} state={{data: brewer}} className='cursor-pointer'>
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