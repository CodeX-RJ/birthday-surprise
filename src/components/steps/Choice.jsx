import Step from '../ui/Step'

const choices = [
  {
    id: 'calm',
    label: 'Calm',
    theme: {
      accent: '#8b8cff',
      soft: '#b3b6ff',
      strong: '#5a5cff',
      glow: 'rgba(139, 140, 255, 0.45)',
    },
  },
  {
    id: 'warm',
    label: 'Warm',
    theme: {
      accent: '#ffb703',
      soft: '#ffd166',
      strong: '#fb8500',
      glow: 'rgba(255, 183, 3, 0.45)',
    },
  },
  {
    id: 'soft',
    label: 'Soft',
    theme: {
      accent: '#ff8fab',
      soft: '#ffb3c6',
      strong: '#ff5d8f',
      glow: 'rgba(255, 143, 171, 0.45)',
    },
  },
]

export default function Choice({ onNext, onSelect }) {
  return (
    <Step>
      <h1>What feels more like you?</h1>

      <p>
        There’s no right answer.
        <br />
        I just wanted this to reflect you —
        <br />
        in some small way.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => {
              onSelect(choice.theme)
              onNext()
            }}
            style={{
              background: choice.theme.accent,
              boxShadow: `0 10px 30px ${choice.theme.glow}`,
              color: '#0b0d1a',
            }}
          >
            {choice.label}
          </button>
        ))}
      </div>
    </Step>
  )
}
