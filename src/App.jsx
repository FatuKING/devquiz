import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Ladding } from './pages/Ladding.jsx'
import { Game } from './pages/Game.jsx'
import { Contact } from './pages/Contact.jsx'
import { Ranking } from './pages/Ranking.jsx'
import { useThemes } from './hooks/useThemes.js'

function App () {
  const { darkMode } = useThemes()

  return (
    <>
      <main className={`${darkMode ? '' : 'dark'} flex w-full h-full`}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Ladding />} />
            <Route path='/game' element={<Game />} />
            <Route path='/ranking' element={<Ranking />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
