import React from 'react'
import { brewLogs } from '../data/logs'

const Log = () => {
  return (
    brewLogs.map((log, key) => (
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