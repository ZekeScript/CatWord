import { useEffect, useState } from 'react'
import { getNewFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => { getNewFact().then(setFact) }
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
