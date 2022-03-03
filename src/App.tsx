import axios from 'axios';
import React, { useState } from 'react';

import styles from './styles.module.scss';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7ea8f56b1244666e614be40f5604b2e6`;

  function searchLocation(event: any) {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  }
  return (
    <div className={styles.app}>
      <div className={styles.search}>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyPress={searchLocation}
          type="text"
        />
      </div>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.location}>
            <p>{data.name}</p>
          </div>
          <div className={styles.temp}>
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className={styles.description}>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </header>
        {data.name != undefined && (
          <section className={styles.content}>
            <div className={styles.feels}>
              {data.main ? <p className={styles.bold}>{data.main.feels_like}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className={styles.humidity}>
              {data.main ? <p className={styles.bold}>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className={styles.wind}>
              {data.wind ? <p className={styles.bold}>{data.wind.speed}MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
