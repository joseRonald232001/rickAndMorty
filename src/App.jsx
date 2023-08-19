import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AllCharacters from './components/AllCharacters'
import CharacetersById from './components/CharacetersById'

function App() {


  return (
  <HashRouter>
    <>
    <Routes>
      <Route  path='/' element={<AllCharacters/>}/>
      <Route  path='characters/:id' element={<CharacetersById/>}  />
    </Routes>
    </>
  </HashRouter>
  )
}

export default App
