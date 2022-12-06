import ChildPage from '../components/ChildLayout'
import Description from '../components/Description'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const Brew = () => {
	// Define Current Brewer

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

	/* useEffect(() => {
		console.log(`The multiple is now ${brewer.multiple}`)
	}, [brewer]) */

	/* const onOptionChangeHandler = event => {
		const multiple = parseInt(event.target.value.substring(2), 10)
		const newBrew = { ...brewer, multiple }
		setBrewer(newBrew)
	} */

	// Slider Logic
	/* const sliderEventHandler = event => {
		const dose = parseInt(event.target.value.substring(0), 10)
		const newBrew = { ...brewer, dose }
		setBrewer(newBrew)
	} */

	return (
		<ChildPage>
			<main className='flex flex-col justify-center align-center p-12'>
				<article className='card card-compact w-96 bg-neutral shadow-xl justify-center p-12'>
					<div className='avatar flex justify-center m-10 w-3/4'>
						{/* <Description info={[name, img, description]} /> */}
					</div>

					{/* Brew Form */}
					<select
						className='select select-primary w-full max-w-xs'
						// onChange={onOptionChangeHandler}
					>
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
							Coffee (grams): 30g
						</label>
						<input
							type='range'
							id='coffee-dose'
							min='10'
							max='50'
							defaultValue='30'
							className='range'
							step='5'
							// onChange={sliderEventHandler}
						/>
					</section>
					<section className='flex flex-col items-center  my-5'>
						<div className='w-full'>
							<p>
								Water Amount:{' '}
								<span className='text-primary'>0</span>
								(mL/grams)
							</p>
						</div>
					</section>
				</article>
			</main>
		</ChildPage>
	)
}
