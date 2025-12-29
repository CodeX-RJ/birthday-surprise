import { useState } from 'react'
import StepContainer from './components/ui/StepContainer'
import useStepManager from './components/ui/useStepManager'

import Intro from './components/steps/Intro'
import PersonalMessage from './components/steps/PersonalMessage'
import Choice from './components/steps/Choice'
import BeforePhoto from './components/steps/BeforePhoto'
import PhotoReveal from './components/steps/PhotoReveal'
import CakeStep from './components/steps/CakeStep'
import FinalMessage from './components/steps/FinalMessage'

function App() {
  const [preference, setPreference] = useState(null)

  const steps = [
    Intro,
    PersonalMessage,
    (props) => (
      <Choice
        {...props}
        onSelect={(choice) => setPreference(choice)}
      />
    ),
    BeforePhoto,   // ✅ NOW INCLUDED
    PhotoReveal,
    CakeStep,
    FinalMessage,
  ]

  const { current, next } = useStepManager(steps.length)
  const CurrentStep = steps[current]

  return (
    <StepContainer preference={preference}>
      <CurrentStep onNext={next} />
    </StepContainer>
  )
}

export default App
