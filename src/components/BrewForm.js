import { useState, useEffect } from "react"

const BrewForm = () => {

    // Ratio State
    const [multiple, setMultiple] = useState(16)
    const [dose, setDose] = useState(20)

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

    return (
    <form>
        <select className='select select-primary w-full max-w-xs' onChange={onOptionChangeHandler}>
        <option>Brew Ratio:</option>
            {ratios.map((ratio, index) => {
            return <option key={index}>{ratio}</option>
            })}
	    </select>

        <section className='flex flex-col items-center my-5'>
            <label
                htmlFor='coffee-dose'
                className='self-start mb-2'
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
        </section>
        <section className='flex flex-col items-center  my-5'>
            <div className='w-full'>
                <p>Water Amount:{' '}
                    <span className='text-primary'>{multiple * dose}</span>
                    (mL/grams)
                </p>
            </div>
        </section>
    </form>
    )
}

export default BrewForm