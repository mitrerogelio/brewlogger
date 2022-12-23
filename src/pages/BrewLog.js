import ChildPage from '../components/ChildLayout'
import { Link, useLocation } from 'react-router-dom'
import {db} from '../firebase/firebase-config'
import { doc, deleteDoc } from '@firebase/firestore'

export const BrewLog = () => {
    // Current Log
    const { state: { data } } = useLocation()

    // Delete Log
    const delButton = async (id) => {
        const docRef = doc(db, 'logs', id)
        await deleteDoc(docRef)
    }

	return (
		<ChildPage>
			<main className='flex flex-col justify-center items-center p-12'>
				<article className='card card-compact w-96 bg-neutral shadow-xl justify-center p-12'>
					<section className='flex items-center space-x-2"'>
                        <img className="mask mask-hexagon w-1/2" src={data.image} />
                        <header>
                            <h1 className='text-m ml-3 text-primary'>Brewer</h1>
                            <h2 className='text-xl ml-3'>{data.vehicle}</h2>
                        </header>
                    </section>
                    <div className="divider"></div> 
                    <h3 className='text-lg font-extrabold'>Details</h3>
                    <section className='grid grid-cols-2 grid-rows-2 my-8 gap-y-4'>
                        <p className=''>Coffee:</p>
                        <p className='text-s text-neutral-content'>{data.coffee}</p>
                        <p className=''>Dose:</p>
                        <p className='text-s text-neutral-content'>{data.dose}</p>
                        <p className=''>Brew Ratio:</p>
                        <p className='text-s text-neutral-content'>1:{data.multiple}</p>
                        <p className=''>Rating:</p>
                        <p className='text-s text-neutral-content'>{data.rating}/5</p>
                        <p className=''>Grind:</p>
                        <p className='text-s text-neutral-content'>{data.grind}</p>
                    </section>
                    <div className='btn btn-active btn-ghost mb-4'>Edit Log</div>
                    <Link className='w-full' to={'/'}>
                        <button className='btn btn-error w-full' onClick={() => {delButton(data.id)}}>Delete Log</button>
                    </Link>
				</article>
			</main>
		</ChildPage>
	)
}
