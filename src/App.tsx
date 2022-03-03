import React from 'react';

import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.location}>
            <p>Dallas</p>
          </div>
          <div className={styles.temp}>
            <h1>65°F</h1>
          </div>
          <div className={styles.description}>
            <p>Clouds</p>
          </div>
        </header>
        <section className={styles.content}>
          <div className={styles.feels}>
            <p className={styles.bold}>65°F</p>
            <p>Feels Like</p>
          </div>
          <div className={styles.humidity}>
            <p className={styles.bold}>20%</p>
            <p>Humidity</p>
          </div>
          <div className={styles.wind}>
            <p className={styles.bold}>12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
