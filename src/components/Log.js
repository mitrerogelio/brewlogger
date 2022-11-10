import React from 'react'

const Log = () => {
  return (
    <article className="stats bg-primary text-primary-content carousel-item">
        <div className="stat">
            <h4 className="stat-title">Brew Method:</h4>
            <p className="stat-value">French Press</p>
            <heading className="stat-actions">
                <button className="btn btn-sm">Edit Log</button>
            </heading>
        </div>
        <div className="stat">
            <h4 className="stat-title">Dose</h4>
            <p className="stat-value">50g</p>
            <h4 className="stat-title">Rating</h4>
            <p className="stat-value">7</p>
        </div>
    </article>
  )
}

export default Log