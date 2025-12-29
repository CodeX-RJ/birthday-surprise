import { useState } from 'react'
import './cake.css'

export default function Cake({ onDone }) {
  const [lit, setLit] = useState(false)

  return (
    <div className="cake-scene">
      <svg
        className="cake-svg"
        width="260"
        height="210"
        viewBox="0 0 260 210"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Plate */}
        <ellipse
          cx="130"
          cy="182"
          rx="112"
          ry="15"
          fill="url(#plateGradient)"
        />

        {/* Cake body */}
        <rect
          x="55"
          y="100"
          width="150"
          height="75"
          rx="24"
          fill="url(#cakeGradient)"
        />

        {/* Ganache */}
        <ellipse
          cx="130"
          cy="100"
          rx="75"
          ry="30"
          fill="url(#ganacheGradient)"
        />

        {/* Candle */}
        <rect
          x="124"
          y="48"
          width="12"
          height="52"
          rx="6"
          fill="#f2f2f2"
          onClick={() => setLit(true)}
          style={{ cursor: 'pointer' }}
        />

        {/* Wick */}
        <rect
          x="129"
          y="42"
          width="2"
          height="6"
          rx="1"
          fill="#333"
        />

        {/* Flame — locked to wick */}
        {lit && (
          <path
            d="
              M130 18
              C124 28, 125 42, 130 46
              C135 42, 136 28, 130 18
              Z
            "
            fill="url(#flameGradient)"
            className="flame"
          />
        )}

        {/* Gradients */}
        <defs>
          <linearGradient id="cakeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b1f11" />
            <stop offset="65%" stopColor="#2a140b" />
            <stop offset="100%" stopColor="#1d0e07" />
          </linearGradient>

          <linearGradient id="ganacheGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a2413" />
            <stop offset="100%" stopColor="#2a140b" />
          </linearGradient>

          <radialGradient id="plateGradient">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#e0e0e0" />
            <stop offset="100%" stopColor="#cfcfcf" />
          </radialGradient>

          <radialGradient id="flameGradient">
            <stop offset="0%" stopColor="#fff7c2" />
            <stop offset="40%" stopColor="#ffd166" />
            <stop offset="70%" stopColor="#ff8c42" />
            <stop offset="100%" stopColor="rgba(255,140,66,0)" />
          </radialGradient>
        </defs>
      </svg>

      {!lit && (
        <p className="cake-text">
          Tap the candle to light it.
        </p>
      )}

      {lit && (
        <>
          <p className="cake-text">
            Make a wish 🤍
          </p>
          <button onClick={onDone}>Continue</button>
        </>
      )}
    </div>
  )
}
