import './App.css'
import { useCatImg } from './hooks/useCatImg'
import { useCatFact } from './hooks/useCatFact'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImg({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>CatWord</h1>
      {fact && <p>{fact}</p>}
      <button onClick={handleClick}>Get new fact</button>
      {imgUrl && <img src={imgUrl} />}
    </main>
  )
}

export default App
