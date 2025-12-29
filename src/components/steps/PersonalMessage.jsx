import Step from '../ui/Step'

export default function PersonalMessage({ onNext }) {
  return (
    <Step>
      <p>
        There are some people
        <br />
        you don’t think about all the time,
        <br />
        but you notice when they’re around.
      </p>

      <p>
        That’s how it was with you.
        <br />
        No big reason.
        <br />
        Nothing planned.
      </p>

      <p>
        Over time, you just became
        <br />
        someone I cared about
        <br />
        in a simple, quiet way.
      </p>

      <p>
        That’s what I mean
        <br />
        when I call you
        <br />
        my <strong>Special One</strong>.
      </p>

      <button onClick={onNext}>
        Continue
      </button>
    </Step>
  )
}
