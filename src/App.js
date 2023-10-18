import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import { useState, useEffect } from 'react';
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[])

  return (
    <div className="App">
      {
        loading
        ?
        <div className='animation'>
          <PacmanLoader
            color={'#fd7e14'}
            loading={loading}
            size={75}
            speedMultiplier={2}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        :
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;