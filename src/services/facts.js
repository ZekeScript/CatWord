const RANDOM_FACT_ENDPOINT = 'https://catfact.ninja/fact'

export const getNewFact = () => {
  return fetch(RANDOM_FACT_ENDPOINT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      return fact
    })
}
