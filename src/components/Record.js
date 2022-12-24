import { LogsProvider } from '../context/LogsProvider'
import Logs from './Logs'

const Record = () => {
  return (
    <LogsProvider>
      <section className='my-24 py-20  bg-base-300'>
          <h3 className='text-3xl font-bold text-center'>Previous Brews</h3>
          <p className='py-6 text-center'>View your previous brews and select to see more data</p>
          <div className='w-screen carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
              <Logs />
          </div>
      </section>
    </LogsProvider>
  )
}

export default Record
