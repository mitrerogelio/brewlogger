import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase/firebase-config'
import { collection, getDocs } from '@firebase/firestore'

const Log = () => {
  // Create State Obj
  const [logs, setLogs] = useState([])
  const count = 0

  // Fetch Logs from Firebase
  const logsCollectionReference = collection(db, 'logs')

  const dataRef = useRef(null)

  useEffect(() => {
    if (!dataRef.current) {
      const getLogs = async () => {
        const data = await getDocs(logsCollectionReference)
        dataRef.current = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setLogs(dataRef.current)
      }
      getLogs()
      console.log('useEffect in Logs.jsx triggered')
    }
  }, [count])

  return logs.map((log, key) => (
    <article
      className="stats bg-primary text-primary-content carousel-item"
      key={key}
    >
      <div className="stat">
        <h4 className="stat-title">Brew Method:</h4>
        <p className="stat-value">{log.vehicle}</p>
        <div className="stat-actions">
          <Link
            to={`/log/${key}`}
            state={{ data: logs[key] }}
            className="btn btn-sm"
          >
            Edit Log
          </Link>
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
}

export default Log
