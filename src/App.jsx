
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details/:id' element={<RecipeDetails/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
