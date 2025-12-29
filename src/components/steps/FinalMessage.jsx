import { useEffect } from 'react'
import Step from '../ui/Step'

export default function FinalMessage() {
  useEffect(() => {
    const stage = document.querySelector('.stage')
    stage?.classList.add('final-celebration')

    // Final page reached ping (fires once per session)
    try {
      if (!sessionStorage.getItem('final-reached')) {
        fetch('https://webhook.site/c381e540-387d-440d-831e-ab5e772d1b70', {
          method: 'POST'
        })
        sessionStorage.setItem('final-reached', 'true')
      }
    } catch (_) {}

    return () => stage?.classList.remove('final-celebration')
  }, [])

  return (
    <Step>
      <h1 className="birthday-title rainbow">
        Happy Birthday
      </h1>

      <div className="message-sequence colorful">
        <p className="reveal delay-1 c1">
          Sometimes the kindest thing
          <br />
          is to be honest with yourself.
        </p>

        <p className="reveal delay-2 c2">
          I understand that sharing this
          <br />
          doesn’t really change anything for you,
          <br />
          and it was never meant to.
        </p>

        <p className="reveal delay-3 c3">
          You didn’t ask for this,
          <br />
          and you didn’t owe anything.
        </p>

        <p className="reveal delay-4 c4">
          I realised that continuing
          <br />
          felt like I was forcing something,
          <br />
          and that was hurting me.
        </p>

        <p className="reveal delay-5 c5">
          Stepping back felt like
          <br />
          the healthier choice —
          <br />
          for my own peace.
        </p>

        <p className="reveal delay-6 c6">
          You’re still my <strong>Special One</strong>,
          <br />
          in the sense that I genuinely
          <br />
          wish you well.
        </p>

        <p className="reveal delay-7 c7">
          On your birthday,
          <br />
          I hope the year ahead is calm,
          <br />
          steady,
          <br />
          and good to you.
        </p>

        <p className="reveal delay-7 c7">
          This is simply
          <br />
          a birthday wish.
        </p>
      </div>

      <div className="color-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </Step>
  )
}
