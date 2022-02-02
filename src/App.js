import React, { useState } from 'react';

import Header from './components/Header'
import Routes from './components/Routes'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
      </div>
    </div>
  )
}

export default App;
