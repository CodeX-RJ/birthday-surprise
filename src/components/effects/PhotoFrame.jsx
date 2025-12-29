import './photo-frame.css'

export default function PhotoFrame({ src, onLoad, style }) {
  return (
    <div className="photo-scene" style={style}>
      <div className="photo-aura"></div>

      <div className="photo-ring ring-outer"></div>
      <div className="photo-ring ring-inner"></div>

      <div className="photo-frame">
        <img
          src={src}
          alt="Her photo"
          onLoad={onLoad}
        />
      </div>
    </div>
  )
}
