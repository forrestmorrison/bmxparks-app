import { useEffect, useState } from 'react'

const Weather = () => {
  const [backendData, setBackendData] = useState("")

  useEffect(() => {
    fetch("/weather").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  })

  return (
    <div className="weather-component">
      <h1>Weather!</h1>
    </div>
  )
}

export default Weather