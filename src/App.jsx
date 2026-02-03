import React from 'react'

export default function App() {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="header-container" aria-label="left banner" />

        <div className="header-container2">
          <div className="header-container2-content">Micole Justine</div>
          <div className="header-container2-content">David</div>
        </div>

        <div className="header-container" aria-label="right banner" />
      </div>

      {/* Body */}
      <div className="body">
        <div className="body-container" />
        <div className="body-container2">
          <div className="body-container2-content" />
          <div className="body-container2-content" />
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-container1" />
        <div className="footer-container2">C-PEITEL3</div>
        <div className="footer-container2">IT3A</div>
        <div className="footer-container1" />
      </div>
    </div>
  )
}
