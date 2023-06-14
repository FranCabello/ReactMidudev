import React, { useState } from "react"
import "./App.css"
import ListOfGifs from "./components/ListOfGifs"

export default function App() {
  const [keyword, setKeyword] = useState('panda')
 
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword="panda" />
      </section>
    </div>
  )
}
