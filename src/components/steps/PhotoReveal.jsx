import { useEffect, useState } from 'react'
import Step from '../ui/Step'
import PhotoFrame from '../effects/PhotoFrame'
import photo from '../../assets/images/her-photo.png'

export default function PhotoReveal({ onNext }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const stage = document.querySelector('.stage')
    stage?.classList.add('photo-active')
    return () => stage?.classList.remove('photo-active')
  }, [])

  return (
    <Step>
      {/* Top text */}
      <div style={{ marginBottom: '140px' }}>
        <p>
          This part is simple.
        </p>

        <p>
          It’s not meant to define you
          <br />
          or capture anything more
          <br />
          than a moment.
        </p>
      </div>

      {/* Fixed center photo */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '260px',
          zIndex: 5
        }}
      >
        {!loaded && (
          <div style={{ textAlign: 'center', marginBottom: '12px' }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: '3px solid rgba(255,255,255,0.2)',
                borderTopColor: 'var(--accent)',
                animation: 'spin 1s linear infinite',
                margin: '0 auto'
              }}
            />
          </div>
        )}

        <PhotoFrame
          src={photo}
          onLoad={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.6s ease'
          }}
        />
      </div>

    
      <div style={{ marginTop: '140px' }}>
        <p>
          Just how you appeared to me —
          <br />
          naturally,
          <br />
          without trying to be anything else.
        </p>

        <p>
          That’s enough
          <br />
          for this moment.
        </p>

        {loaded && (
          <button onClick={onNext}>
            Continue
          </button>
        )}
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Step>
  )
}
