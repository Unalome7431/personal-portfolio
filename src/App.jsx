import { Star } from 'lucide-react'
import './App.css'
import NavBar from './components/NavBar'
import About from './navigation/About'
import Contact from './navigation/Contact'
import Start from './navigation/Start'
import Experience from './navigation/Experience'
import Work from './navigation/Work'

function App() {

  return (
    <>
      <NavBar />
      <Start />
      <About />
      <Experience />
      <Work />
    </>
  )
}

export default App
