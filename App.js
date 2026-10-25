import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [error, setError] = useState('')

  const searchLocation = (event) => {
    if (event.key !== 'Enter') return

    const city = location.trim()
    const key = apiKey.trim()
    if (!city || !key) {
      setError('Enter a location and your own OpenWeatherMap API key.')
      return
    }

    setError('')
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: { q: city, units: 'imperial', appid: key }
    }).then((response) => {
      setData(response.data)
      setLocation('')
    }).catch(() => {
      setError('Unable to retrieve weather. Check your location, key and connection.')
    })
  }

  return (
    <div className="app">
      <div className="search">
        <input
          aria-label="Your OpenWeatherMap API key"
          aria-describedby="api-key-note"
          value={apiKey}
          onChange={event => setApiKey(event.target.value)}
          placeholder="Your OpenWeatherMap API Key"
          type="password"
          autoComplete="off" />
        <p id="api-key-note">
          Local demo: use your own key. It stays in this tab's memory and is
          visible in browser requests sent to OpenWeatherMap.
        </p>
        <input
          aria-label="Location"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location and Press Enter"
          type="text" />
        {error && <p role="alert">{error}</p>}
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default App
