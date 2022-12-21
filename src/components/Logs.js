import { useEffect, useContext } from 'react'
import { LogsContext } from '../context/LogsProvider'

const Log = () => {
  // Fetch Logs from context
  const [logs] = useContext(LogsContext)
  
  useEffect(() => {
      console.log('Logs.js Component Rendered')
  }, [] )

  return (
    logs.map((log, key) => (
      <article className="stats bg-primary text-primary-content carousel-item" key={key}>
        <div className="stat">
            <h4 className="stat-title">Brew Method:</h4>
            <p className="stat-value">{log.brewer}</p>
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