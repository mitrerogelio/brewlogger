import { useState } from 'react'
import ChildPage from '../components/ChildLayout'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {db} from '../firebase/firebase-config'
import { doc, deleteDoc, updateDoc } from '@firebase/firestore'

export const BrewLog = () => {
    
    // Current Log
    const { state: { data } } = useLocation()
    
    const location = useLocation()
    // console.log(location)
   
    // Field States
    const [multiple, setMultiple] = useState(data.multiple)
    const [dose, setDose] = useState(data.dose)
    const [coffee, setCoffee] = useState(data.coffee)
    const [roast, setRoast] = useState(data.roast)
    const [grind, setGrind] = useState(data.grind)
    const [rating, setRating] = useState(data.rating)

    // Dropdown Options
	const ratios = [
		'1:1',
        '1:2',
        '1:3',
        '1:4',
        '1:5',
        '1:6',
        '1:7',
		'1:8',
		'1:9',
		'1:10',
		'1:11',
		'1:12',
		'1:13',
		'1:14',
		'1:15',
		'1:16',
		'1:17',
		'1:18',
		'1:19',
		'1:20',
	]

    const navigate = useNavigate()

    // Delete Log
    const delButton = async (id) => {
        const docRef = doc(db, 'logs', id)
        await deleteDoc(docRef)
    }

    // Edit Logic
    const formHandler = async (event) => {
        event.preventDefault()
        const docRef = doc(db, 'logs', data.id)
        await updateDoc(docRef, {multiple, dose, coffee, roast, grind, rating})
        navigate('/')
    }

	return (
		<ChildPage>
			<form className='flex flex-col justify-center items-center p-12' onSubmit={formHandler}>
				<article className='card card-compact w-[33rem] bg-neutral shadow-xl justify-center py-12 px-8'>
					<section className='flex items-center space-x-2"'>
                        <img className="mask mask-hexagon w-1/2" src={data.image} />
                        <header>
                            <h1 className='text-m ml-3 text-primary'>Brewer</h1>
                            <h2 className='text-xl ml-3'>{data.vehicle}</h2>
                        </header>
                    </section>
                    <div className="divider"></div> 
                    <h3 className='text-lg font-extrabold text-primary'>Details</h3>
                    <section className='flex flex-col grid grid-cols-2 grid-rows-2 my-8 gap-y-4 flex-grow-0 flex-shrink-0'>
                        {/* Coffee */}
                        <p className='flex flex-col justify-center'>Coffee:</p>
                        <input type="text" placeholder={data.coffee} className="input input-ghost text-sm w-full max-w-xs flex-grow-1 flex-shrink-1"
                        onChange={(event) => {setCoffee(event.target.value)}}
                        />
                        {/* Brew Ratio */}
                        <p className='flex flex-col justify-center'>Brew Ratio:</p>
                        <select className='select select-ghost w-full max-w-xs' 
                        defaultValue={`1:${data.multiple}`}
                        onChange={(event) => {setMultiple(event.target.value)}}>
                            <option>Brew Ratio:</option>
                            {ratios.map((ratio, index) => {
                            return <option key={index} value={ratio}>{ratio}</option>
                            })}
                        </select>
                        {/* Dose */}
                        <p className='flex flex-col justify-center'>Dose:</p>
                        <input type="number" placeholder={data.dose} className="input input-ghost text-sm w-full max-w-xs flex-grow-1 flex-shrink-1"
                        onChange={(event) => {setDose(event.target.value)}}
                        />
                        {/* Roast */}
                        <p className='flex flex-col justify-center'>Roast:</p>
                        <input type="text" placeholder={data.roast} className="input input-ghost text-sm w-full max-w-xs flex-grow-1 flex-shrink-1"
                        onChange={(event) => {setRoast(event.target.value)}}
                        />
                        {/* Grind */}
                        <p className='flex flex-col justify-center'>Grind:</p>
                        <input type="text" placeholder={data.grind} className="input input-ghost text-sm w-full max-w-xs flex-grow-1 flex-shrink-1"
                        onChange={(event) => {setGrind(event.target.value)}}
                        />
                        {/* Rating */}
                        <p className='flex flex-col justify-center'>Rating:</p>
                        <select className='select select-ghost w-full max-w-xs' defaultValue={data.rating} 
                        onChange={(event) => {setRating(event.target.value)}}>
                           <option value={1}>1</option>
                           <option value={2}>2</option>
                           <option value={3}>3</option>
                           <option value={4}>4</option>
                           <option value={5}>5</option>
                        </select>
                    </section>

                    <button className='btn btn-outline mb-4' type='submit'>Edit Log</button>
                    <Link className='w-full' to={'/'}>
                        <button className='btn btn-outline btn-error w-full' onClick={() => {delButton(data.id)}}>Delete Log</button>
                    </Link>
				</article>
			</form>
		</ChildPage>
	)
}
