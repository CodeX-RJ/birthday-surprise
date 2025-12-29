import Step from '../ui/Step'
import Cake from '../effects/Cake'

export default function CakeStep({ onNext }) {
  return (
    <Step>
      <p>
        I know this is just a screen.
        <br />
        But some moments don’t need noise to matter.
      </p>

      <Cake onDone={onNext} />

      <p>
        I hope this year is a little kinder
        <br />
        to my <strong>Special One</strong>.
      </p>
    </Step>
  )
}
