import React, { useEffect, useState } from "react"
import Header from "./component/header"
import Card from "./component/card"
import "./App.css"

function App() {
  const [search, setSearch] = useState("")
  const [movieList, setMovieList] = useState([])
  const [errorMsg, seterrorMsg] = useState("")

  useEffect(() => {
    if (search) {
      fetch(`http://www.omdbapi.com/?s=${search}&apikey=9f0bde28`)
        .then((res) => res.json())
        .then((result) => {
          console.log("app.js api call", result)
          if (result.Response === "False") {
            setMovieList([])
            seterrorMsg(result.Error)
          } else if (result.Search) {
            seterrorMsg(result.Error)
            setMovieList(result.Search)
          }
        })
    }
  }, [search])

  return (
    <React.Fragment>
      <Header search={search} setSearch={setSearch} />
      {errorMsg}
      <Card movieList={movieList} />
    </React.Fragment>
  )
}

export default App
