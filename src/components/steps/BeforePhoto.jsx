import Step from '../ui/Step'

export default function BeforePhoto({ onNext }) {
  return (
    <Step>
      <p>
        The next part includes something personal.
      </p>

      <p>
        I realise that using something like this
        <br />
        deserves care and consideration.
      </p>

      <p>
        If this feels like more than expected,
        <br />
        that wasn’t meant carelessly.
      </p>

      <p>
        It comes from a place of respect,
        <br />
        even if it crosses into something private.
      </p>

      <button onClick={onNext}>
        Continue
      </button>
    </Step>
  )
}
