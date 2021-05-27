import React, { useState } from "react"
import Counter from "./components/Counter.jsx"
import "./css/App.css"

const App = () => {
  const [ date, setDate ] = useState(new Date(2021, 4, 27, 12))
  const date2 = new Date(Date.now())
  console.log(date2.getDate())
  console.log(date2.getMonth())
  console.log(date2.getFullYear())
  console.log(date2.getTime())
  console.log(new Intl.DateTimeFormat("es-VE", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(date2))
  console.log(new Intl.DateTimeFormat("es-VE").format(date2))
  const dateText = new Intl.DateTimeFormat("es-VE").format(date)
  const timeText = new Intl.DateTimeFormat("es-VE", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(date)
  return(
    <>
      <div className="App-title">
        <h1>Juan's Birthday</h1>
      </div>
      <div className="App-date">
        <h1>
            {dateText}
          </h1>
          <span>At</span>
          <h1>
            {timeText}
          </h1>
      </div>
      <Counter date={date} />
    </>
  )
}

export default App 