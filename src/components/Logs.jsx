import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase/firebase-config'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { auth } from '../firebase/firebase-config'

const Log = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const dataRef = useRef(null)
  const logsRef = collection(db, 'logs')
  const userId = auth.currentUser ? auth.currentUser.uid : null;
  const queryRef = query(logsRef, where('uid', '==', userId))

  useEffect(() => {
    setLoading(true) // set loading state to true when the component mounts
    const getLogs = async () => {
        if (!auth.currentUser) return
        const data = await getDocs(queryRef);
        dataRef.current = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))
        setLogs(dataRef.current)
        setLoading(false)
    }
    getLogs()
    console.log('useEffect in Logs.jsx triggered')
}, [])

  if (!logs.length) {
    return <p>No logs found</p>
  }

  return logs.map((log, key) => (
    <article
      className='stats bg-primary text-primary-content carousel-item'
      key={key}
    >
      <div className='stat'>
        <h4 className='stat-title'>Brew Method:</h4>
        <p className='stat-value'>{log.vehicle}</p>
        <div className='stat-actions'>
          <Link
            to={`/log/${key}`}
            state={{ data: logs[key] }}
            className='btn btn-sm'
          >
            Edit Log
          </Link>
        </div>
      </div>
      <div className='stat'>
        <h4 className='stat-title'>Dose</h4>
        <p className='stat-value'>{log.dose}g</p>
        <h4 className='stat-title'>Rating</h4>
        <p className='stat-value'>{log.rating}</p>
      </div>
    </article>
  ))
}

export default Log
