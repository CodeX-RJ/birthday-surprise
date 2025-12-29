import { useState } from 'react'

export default function useStepManager(totalSteps) {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((c) => Math.min(c + 1, totalSteps - 1))
  }

  const prev = () => {
    setCurrent((c) => Math.max(c - 1, 0))
  }

  const goTo = (index) => {
    if (index >= 0 && index < totalSteps) {
      setCurrent(index)
    }
  }

  return {
    current,
    next,
    prev,
    goTo,
  }
}
