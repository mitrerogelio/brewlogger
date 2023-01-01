import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { collection, getDocs } from '@firebase/firestore'
import { db } from '../firebase/firebase-config'

const Brewmethods = () => {
  const [devices, setDevices] = useState([])
  const count = 0

  const brewersCollectionReference = collection(db, 'brewers')

  const dataRef = useRef(null)

  useEffect(() => {
    if (!dataRef.current) {
      const getBrewers = async () => {
        const data = await getDocs(brewersCollectionReference)
        dataRef.current = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setDevices(dataRef.current)
      }
      getBrewers()
      console.log('useEffect in Brewmethods.jsx triggered')
    }
  }, [count])

  return devices.map((brewer, key) => (
    <Link
      to={`/brew/${brewer.id}`}
      key={key}
      state={{ data: devices[key] }}
      className="cursor-pointer"
    >
      <article className="avatar h-32 m-3 flex flex-col justify-center">
        <div className="w-28 rounded-full">
          <img src={brewer.img} alt={`Closeup of ${brewer.name}`} />
        </div>
        <p className="text-center">{brewer.name}</p>
      </article>
    </Link>
  ))
}

export default Brewmethods
