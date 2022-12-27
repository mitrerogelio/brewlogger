import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import {addDoc} from 'firebase/firestore'
import { logsCollectionReference } from '../context/LogsProvider'


const BrewForm = ({brewer}) => {
    
    // Field States
    const [multiple, setMultiple] = useState(brewer.multiple)
    const [dose, setDose] = useState(brewer.dose)
    const [coffee, setCoffee] = useState('')
    const [roast, setRoast] = useState('')
    const [grind, setGrind] = useState('')
    const [rating, setRating] = useState(5)
    const vehicle = brewer.name
    const brewerImg = brewer.img
    
    // Brew Ratio Logic
    const onOptionChangeHandler = event => {
		const multiple = parseInt(event.target.value.substring(2), 10)
		setMultiple(multiple)
	}

	// Slider Logic
	const sliderEventHandler = event => {
		const dose = parseInt(event.target.value.substring(0), 10)
		setDose(dose)
	}

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

    // Rating Logic
    const onRadio = e => {
        setRating(e.target.value)
    }

    // Button Click Logic
    const navigate = useNavigate()
    const formRef = useRef(null)

    // Create Log ❤️
    const createLog = async (e) => {
        e.preventDefault()
        await addDoc(logsCollectionReference, { vehicle, image: brewerImg, coffee, multiple, dose, roast, grind, rating })
        
        formRef.current.dispatchEvent(new Event('submit', { cancelable: true }))
        navigate('/')
    }

    return (
        <form className="my-5" onSubmit={createLog} ref={formRef}>
            <input type="text" placeholder="Your coffee" className="input input-sm input-bordered w-full max-w-xs mb-5"
            onChange={(event) => {setCoffee(event.target.value)}} />

            <select className='select select-bordered w-full max-w-xs' onChange={onOptionChangeHandler}>
                <option>Brew Ratio:</option>
                    {ratios.map((ratio, index) => {
                    return <option key={index}>{ratio}</option>
                    })}
            </select>

            <section className='flex flex-col items-center my-5'>
                <label
                    htmlFor='coffee-dose'
                    className='self-start mb-2 text-l'
                >
                    Coffee (grams): {dose}g
                </label>
                <input
                    type='range'
                    id='coffee-dose'
                    min='10'
                    max='50'
                    defaultValue='30'
                    className='range'
                    step='5'
                    onChange={sliderEventHandler}
                />
                <input type="text" placeholder="Roast level" className="my-5 input input-sm input-bordered w-full max-w-xs mb-5"
                onChange={(event) => {setRoast(event.target.value)}} />
                <input type="text" placeholder="Grind" className="my-5 input input-sm input-bordered w-full max-w-xs mb-5"
                onChange={(event) => {setGrind(event.target.value)}} />
                <div className='w-full mt-4'>
                    <p>Water Amount:{' '}
                        <span className='text-primary'>{multiple * dose}</span>
                        (mL/grams)
                    </p>
                </div>
                
                <section className="rating gap-1 mt-10">
                    <input type="radio" name="rating-3" value={1} className="mask mask-heart bg-red-400"
                    onChange={onRadio} />
                    <input type="radio" name="rating-3" value={2} className="mask mask-heart bg-orange-400"
                    onChange={onRadio} />
                    <input type="radio" name="rating-3" value={3} className="mask mask-heart bg-yellow-400"
                    onChange={onRadio} />
                    <input type="radio" name="rating-3" value={4} className="mask mask-heart bg-lime-400"
                    onChange={onRadio} />
                    <input type="radio" name="rating-3" value={5} className="mask mask-heart bg-green-400"
                    onChange={onRadio} />
                </section>

                <button className="btn btn-primary mt-10" type='submit'>Create Log</button>
            </section>
        </form>
    )
}

export default BrewForm