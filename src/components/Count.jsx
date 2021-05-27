import React from "react"
import "../css/components/Count.css"

const Count = ({ name, count }) => {
  return(
    <div className="Count">
      <div className="Count-container">
        
        <div className="mask full">
          <div className="fill"></div>
        </div>
      
        <div className="mask half">
          <div className="fill"></div>
        </div>
        
        <div className="Count-inside">
          <h1>{count}</h1>
          <span>{name}</span>
        </div>
      </div>
    </div>
  )
}

export default Count