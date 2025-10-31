import { useState, useEffect } from 'react'
import '../styles/App.css'
import Personal from './Personal'
import Education from './Education'
import Experience from './Experience'

function App() {
  return (
    <div id="app">
        <Personal />
        <Education />
        <Experience />
              {/*<div>*/}
              {/*  <a href="https://vite.dev" target="_blank">*/}
              {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
              {/*  </a>*/}
              {/*</div>*/}
              {/*<h1>Vite + React</h1>*/}
              {/*<div className="card">*/}
              {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
              {/*    count is {count}*/}
              {/*  </button>*/}
              {/*  <p>*/}
              {/*    Edit <code>src/App.jsx</code> and save to test HMR*/}
              {/*  </p>*/}
              {/*</div>*/}
              {/*<p className="read-the-docs">*/}
              {/*  Click on the Vite and React logos to learn more*/}
              {/*</p>*/}
    </div>
  )
}

export default App
