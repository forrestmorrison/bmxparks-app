import axios from 'axios'
import { useState } from 'react'

const Weather = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=austin&appid={apiKey}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  return (
    <div className="weather-component">
      <h4>current temperature: {data.main.temp.toFixed()}°F</h4>
      <h4>description: {data.weather[0].main}</h4>
      <h4>feels like: {data.main.feels_like.toFixed()}</h4>
    </div>
  )
}

export default Weather