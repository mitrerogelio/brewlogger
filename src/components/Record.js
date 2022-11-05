import React from 'react'

const Record = () => {
  return (
    <section className=''>
        <h3>Previous Brews</h3>
        <p>View your previous brews and select to see more data</p>
        <div className="stats bg-primary text-primary-content">
            <div className="stat">
                <div className="stat-title">Brew Method</div>
                <div className="stat-value">French Press</div>
                <div className="stat-actions">
                <button className="btn btn-sm btn-success">Add funds</button>
                </div>
            </div>
            <div className="stat">
                <div className="stat-title">Current balance</div>
                <div className="stat-value">$89,400</div>
                <div className="stat-actions">
                <button className="btn btn-sm">Withdrawal</button> 
                <button className="btn btn-sm">deposit</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Record