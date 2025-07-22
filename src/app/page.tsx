// src/app/page.tsx
'use client'
import { useState } from 'react'
import './styles/home.css'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
    alert('Thank you for joining our mailing list!')
  }

  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">YUZU CAKE</h1>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="content-wrapper">
          <h2 className="section-title">EVENTS COMING UP</h2>
          <div className="events-grid">
            <div className="event-card"></div>
            <div className="event-card"></div>
            <div className="event-card"></div>
            <div className="event-card"></div>
            <div className="event-card"></div>
            <div className="event-card"></div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="content-wrapper">
          <h2 className="section-title">GALLERY</h2>
          <div className="gallery-grid">
            <div className="gallery-image large-image"></div>
            <div className="gallery-image"></div>
            <div className="gallery-image"></div>
            <div className="gallery-image"></div>
            <div className="gallery-image"></div>
            <div className="gallery-image full-width"></div>
          </div>
        </div>
      </section>

      {/* Mailing List Section */}
      <section className="mailing-section">
        <div className="content-wrapper">
          <h2 className="section-title">JOIN OUR MAILING LIST</h2>
          <form className="mailing-form" onSubmit={handleEmailSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="email-input"
              required
            />
            <button 
              type="submit"
              className="join-button"
            >
              Join Us
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}