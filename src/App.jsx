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
      <Contact />
      <div className="h-15 w-full bg-[#F8F6F4] shadow-2xl shadow-black shadow-t border-t border-emerald-700 flex items-center justify-center">
        <p className='text-emerald-700 font-extrabold font-mono text-center items-center'>Deisgned and Build by Velengio Deriksen Charles - 2026</p>
      </div>
    </>
  )
}

export default App
