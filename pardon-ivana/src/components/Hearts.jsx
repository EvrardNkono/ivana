// src/components/Hearts.jsx
import { useEffect, useState } from 'react'
import './Hearts.css'

export default function Hearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substr(2, 9)
      const size = Math.floor(Math.random() * 40) + 20
      const left = Math.floor(Math.random() * 100)
      const color = `#ff4d6d` // rouge-rose
      const duration = Math.random() * 5 + 5 // 5 à 10s

      setHearts(prev => [...prev, { id, size, left, color, duration }])

      // Supprimer le cœur après son animation
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== id))
      }, duration * 1000)
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg_heart">
      {hearts.map(h => (
        <div
          key={h.id}
          className="heart"
          style={{
            width: `${h.size}px`,
            height: `${h.size}px`,
            left: `${h.left}%`,
            backgroundColor: h.color,
            animation: `love ${h.duration}s linear forwards`
          }}
        />
      ))}
    </div>
  )
}
