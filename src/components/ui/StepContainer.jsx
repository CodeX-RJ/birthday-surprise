import { useEffect } from 'react'

export default function StepContainer({ children, preference }) {
  useEffect(() => {
    if (!preference) return

    const root = document.documentElement

    root.style.setProperty('--accent', preference.accent)
    root.style.setProperty('--accent-soft', preference.soft)
    root.style.setProperty('--accent-strong', preference.strong)
    root.style.setProperty('--accent-glow', preference.glow)
  }, [preference])

  return (
    <div className="viewport">
      <div className="stage">
        {children}
      </div>
    </div>
  )
}
