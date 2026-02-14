import { Star } from 'lucide-react'
import './App.css'
import NavBar from './components/NavBar'
import About from './navigation/About'
import Contact from './navigation/Contact'
import Start from './navigation/Start'

function App() {

  return (
    <>
      <NavBar />
      <Start />
      <About />
    </>
  )
}

export default App
