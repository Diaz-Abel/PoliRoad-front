import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MateriaListPage } from './pages/MateriaListPage'
import { MateriaFormPage } from './pages/MateriaFormPage'
import { Home } from "./pages/home"
function App() {
  return (

    <BrowserRouter>
      <Home />

      <Routes>

        <Route path='/list' element={<MateriaListPage />}></Route>
        <Route path='/create' element={<MateriaFormPage />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App