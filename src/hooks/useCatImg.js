import { useEffect, useState } from 'react'

const CAT_IMG_ENDPONT = 'https://cataas.com'

export function useCatImg ({ fact }) {
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 1)

    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImgUrl(url)
      })
  }, [fact])

  return { imgUrl: `${CAT_IMG_ENDPONT}${imgUrl}` }
}
