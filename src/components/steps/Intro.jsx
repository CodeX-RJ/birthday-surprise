import Step from '../ui/Step'

export default function Intro({ onNext }) {
  return (
    <Step>
      <h1>Before we begin…</h1>

      <p>
        This isn’t something big.
        <br />
        It’s just something I made —
        <br />
        because today felt important.
      </p>

      <p>
        And because <strong>you</strong> felt worth the effort.
      </p>

      <button onClick={onNext}>
        Let’s go
      </button>
    </Step>
  )
}
