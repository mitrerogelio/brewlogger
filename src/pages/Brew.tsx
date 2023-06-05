import ChildPage from '../components/ChildLayout'
import Description from '../components/Description'
import BrewForm from '../components/BrewForm'
import { useLocation } from 'react-router-dom'
import React from 'react'

export const Brew = () => {
	// Define Current Brewer
	const { state: { data } } = useLocation()

	return (
		<ChildPage>
			<main className='flex flex-col justify-center items-center p-12'>
				<article className='card card-compact w-96 bg-neutral shadow-xl justify-center p-12'>
					<Description brewer={data} />
					<BrewForm brewer={data}  />
				</article>
			</main>
		</ChildPage>
	)
}
