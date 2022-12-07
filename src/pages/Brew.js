import ChildPage from '../components/ChildLayout'
import Description from '../components/Description'
import BrewForm from '../components/BrewForm'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const Brew = () => {
	// Define Current Brewer
	

	return (
		<ChildPage>
			<main className='flex flex-col justify-center align-center p-12'>
				<article className='card card-compact w-96 bg-neutral shadow-xl justify-center p-12'>
					<div className='avatar flex justify-center m-10 w-3/4'>
						{/* <Description /> */}
					</div>

					<BrewForm />
				</article>
			</main>
		</ChildPage>
	)
}
