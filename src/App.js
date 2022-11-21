import { React } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Brew } from './pages/Brew'
import { Settings } from './pages/Settings'
import { Profile } from './pages/Profile'

export const App = () => {
  
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:brewer' element={<Brew />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </main>
  )
}

export default App