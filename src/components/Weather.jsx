import { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = () => {
  const [records, setRecords] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {setRecords(res.data)})
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="weather-component">
      <h4>current weather: </h4>
      <ul>
        {records.map((list, index) => (
          <li key={index}>{list.id} | {list.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Weather