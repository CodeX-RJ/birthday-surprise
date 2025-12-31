import Step from '../ui/Step'

export default function Intro({ onNext }) {
  return (
    <Step>
      {/* New Year Message */}
      <h1>Happy New Year</h1>

      <p>
        A new year begins today.
        <br />
        A quiet moment of change.
        <br />
        A fresh start.
      </p>

      <p>
        I hope this year brings you
        <br />
        peace where you need it,
        <br />
        strength where you don’t expect it,
        <br />
        and moments that feel right to you.
      </p>

      <p>
        And since this new beginning
        <br />
        also happens to be something special
        <br />
      </p>

      {/* Your original intro */}
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
