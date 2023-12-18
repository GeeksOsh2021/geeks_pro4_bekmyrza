import { useEffect, useState } from "react";
import "./App.css"

const App = () => {
  const [data, setData] = useState([])
  const [imgs, setimgs] = useState([])
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const prom = fetch(`https://pokeapi.co/api/v2/pokemon/`).then((res) => {
      return res.json()
    }).then((data) => {
      setData(data)
      data.results.map((item) => {
        fetch(item.url).then((res) => {
          return res.json()
        }).then((pok) => {
          pokemons.push({
            name: item.name,
            img: pok.sprites.back_default
          })
          setPokemons(pokemons)
        })
      })
    })
    setTimeout(() => {
      setimgs('')
    }, 1000)
  }, [])


  return (
    <div>
      <div className="app">
        {
          pokemons.length > 0 ?
            pokemons.map((item) => {
              return <div className="item"><img src={item.img} /><p>{item.name}</p></div>
            })
            : ''
        }
        {
          imgs
        }
      </div>
    </div>

  )
}

export default App