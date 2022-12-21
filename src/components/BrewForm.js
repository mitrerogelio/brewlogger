import { useState, useEffect } from 'react'
import {addDoc} from 'firebase/firestore'
import { logsCollecionReference } from '../context/LogsProvider'


const BrewForm = ({brewer}) => {
    // Some fields (rating, grind, etc) are unused in MVP

    // Field States
    const [multiple, setMultiple] = useState(brewer.multiple)
    const [dose, setDose] = useState(brewer.dose)

    useEffect(() => {
		console.log(`The multiple is now ${multiple} -BrewForm.js`)
        console.log(`The dose is now ${dose} -BrewForm.js`)
	}, [multiple, dose] )

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

    // Create Log ❤️
    const createLog = async (e) => {
        e.preventDefault()
        await addDoc(logsCollecionReference, { multiple: multiple, dose: dose } )
        
    }


    return (
    <form className="my-5" onSubmit={createLog}>
        <select className='select select-warning bg-transparent w-full max-w-xs' onChange={onOptionChangeHandler}>
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
            <div className='w-full mt-8'>
                <p>Water Amount:{' '}
                    <span className='text-primary'>{multiple * dose}</span>
                    (mL/grams)
                </p>
            </div>
            <button className="btn btn-primary mt-10" type='submit'>Create Log</button>
        </section>
    </form>
    )
}

export default BrewForm