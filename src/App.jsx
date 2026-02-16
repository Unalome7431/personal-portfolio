import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import About from './navigation/About'
import Contact from './navigation/Contact'
import Start from './navigation/Start'
import Experience from './navigation/Experience'
import Work from './navigation/Work'

function App() {
  const [activeSection, setActiveSection] = useState("Start");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 1, // Trigger when 60% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Grab all sections by their IDs
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='relative'>
      <NavBar activeSection={activeSection} />
      <section id='Start'><Start /></section>
      <section id='About' className='-scroll-mt-40'><About /></section>
      <section id='Experience' className='-scroll-mt-20'><Experience /></section>
      <section id='Work' className='-scroll-mt-20'><Work /></section>
      <section id='Contact' className='-scroll-mt-15'><Contact /></section>
      <div className="h-15 w-full bg-[#F8F6F4] shadow-2xl shadow-black shadow-t border-t border-emerald-700 flex items-center justify-center">
        <p className='text-emerald-700 font-extrabold font-mono text-center items-center'>Designed and Built by Velengio Deriksen Charles - 2026</p>
      </div>
    </div>
  )
}

export default App
