import { useState, useEffect } from 'react'
import {db} from '../firebase/firebase-config'
import { collection, getDocs } from '@firebase/firestore'

const Log = () => {
  const [logs, setLogs] = useState([])
  
  const logsCollectionReference = collection(db, 'brewers')
  
  useEffect(() => {
      const getLogs = async () => {
      const data = await getDocs(logsCollectionReference)
      setLogs(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
      }
      getLogs()
  }, [] )

  return (
    logs.map((log, key) => (
      <article className="stats bg-primary text-primary-content carousel-item" key={key}>
        <div className="stat">
            <h4 className="stat-title">Brew Method:</h4>
            <p className="stat-value">{log.name}</p>
            <div className="stat-actions">
                <button className="btn btn-sm">Edit Log</button>
            </div>
        </div>
        <div className="stat">
            <h4 className="stat-title">Dose</h4>
            <p className="stat-value">{log.dose}g</p>
            <h4 className="stat-title">Rating</h4>
            <p className="stat-value">{log.rating}</p>
        </div>
    </article>
    ))
  )
}

export default Log