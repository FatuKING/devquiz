import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Ladding } from './pages/Ladding.jsx'
import { Game } from './pages/Game.jsx'
import { Contact } from './pages/Contact.jsx'
import { Material } from './pages/Material.jsx'
import { Ranking } from './pages/Ranking.jsx'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Ladding />} />
          <Route path='/game' element={<Game />} />
          <Route path='/ranking' element={<Ranking />} />
          <Route path='/material' element={<Material />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
