import { createContext, useState, useEffect } from 'react'
import {db} from '../firebase/firebase-config'
import { collection, getDocs } from '@firebase/firestore'

// Create Context
export const BrewerContext = createContext()

export const BrewerProvider = props => {

    // Create State Obj
    const [devices, setDevices] = useState([])

    // Fetch Brewers from Firebase
    const brewersCollectionReference = collection(db, 'brewers')
    
    useEffect(() => {
        const getBrewers = async () => {
        const data = await getDocs(brewersCollectionReference)
        setDevices(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }
        getBrewers()

        console.log('Component Rendered -BrewerProvider.js')
    }, [] )

    return (
        <BrewerContext.Provider value={[devices, setDevices]}>
            {props.children}
        </BrewerContext.Provider>
    )
}
