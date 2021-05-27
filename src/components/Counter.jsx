import React, { useState, useEffect} from "react"
import Count from "./Count.jsx"
import getTime from "../libs/getTime.js"
import "../css/components/Counter.css"

const Counter = ({ date }) => {
  // console.log(new Intl.DateTimeFormat().format(date))
  const [ timeLeft, setTimeLeft ] = useState({
    days: 2,
    hours: 2,
    minutes: 2,
    seconds: 2
  })

  const countdown = (dateTo) => {
    const timerUpdate = setInterval( () => {
        let currenTime = getTime(dateTo);
        setTimeLeft({
          days: currenTime.days,
          hours: currenTime.hours,
          minutes: currenTime.minutes,
          seconds: currenTime.seconds
        })

        if (currenTime.time <= 1) {
            clearInterval(timerUpdate);
        }

    }, 1000);
  };
  useEffect(() => {
    countdown(date)
  })
  return(
    <>
      <div className="Counter">
        <div className="container">
          <Count name="Days" count={timeLeft.days} />
          <Count name="Hours" count={timeLeft.hours} />
          <Count name="Minutes" count={timeLeft.minutes} />
          <Count name="Seconds" count={timeLeft.seconds} />
        </div>
        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 &&
        <div className="Counter-happyBirthday">
          <div className="container">
            <h1>😎 happy Birthday!</h1>
          </div>
        </div>
        }
      </div>
    </>
  )
}

export default Counter