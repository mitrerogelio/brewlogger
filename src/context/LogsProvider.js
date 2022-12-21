import { createContext, useState, useEffect } from 'react'
import {db} from '../firebase/firebase-config'
import { collection, getDocs } from '@firebase/firestore'

// Create Context
export const LogsContext = createContext()

// Fetch Logs from Firebase
export const logsCollecionReference = collection(db, 'logs')

export const LogsProvider = props => {

    // Create State Obj
    const [logs, setLogs] = useState([])
    
    useEffect(() => {
        const getLogs = async () => {
        const data = await getDocs(logsCollecionReference)
        setLogs(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }
        getLogs()

        console.log('Component Rendered -LogsProvider.js')
    }, [] )

    return (
        <LogsContext.Provider value={[logs, setLogs]}>
            {props.children}
        </LogsContext.Provider>
    )
}
