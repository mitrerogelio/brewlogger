import ChildNav from '../components/ChildNav'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { BrewerProvider } from '../context/BrewerProvider'

export const Settings = () => {
  const [devices, setDevices] = useContext(BrewerProvider)
  console.log(devices)
  return (
    <section>
      <ChildNav />
      <h1 className='text-center text-5xl font-bold w-3/5 mx-auto mt-20'>Settings</h1>
      <h2 className='text-center text-3xl font-bold w-3/5 mx-auto mt-20' ><Link to='/profile'>Edit Profile</Link></h2>
      <Footer />
    </section>
  )
}
