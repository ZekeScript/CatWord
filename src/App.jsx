import { useState, useEffect } from 'react'
import './App.css'

const RANDOM_FACT_ENDPOINT = 'https://catfact.ninja/fact'
const CAT_IMG_ENDPONT = 'https://cataas.com'

function App () {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    fetch(RANDOM_FACT_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ').slice(0, 1)

    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImgUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>CatWord</h1>
      {fact && <p>{fact}</p>}
      {imgUrl && <img src={CAT_IMG_ENDPONT + imgUrl} />}
    </main>
  )
}

export default App
