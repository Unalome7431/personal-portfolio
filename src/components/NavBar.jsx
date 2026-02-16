import { Fragment } from "react"

function NavBar({ activeSection }) {
  const navContainer = [
    {id: 1, text: 'About'},
    {id: 2, text: 'Experience'},
    {id: 3, text: 'Work'},
    {id: 4, text: 'Contact'}
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-20 border-b border-emerald-700 shadow-xl bg-[#F8F6F4]">
      <div className="flex gap-3 justify-between mr-7 ml-7 mt-7">
        <a href="#Start" className="text-emerald-700 font-extrabold text-2xl font-zilla-slab">{"<"}Velengio{" />"}</a>
        <div className="flex gap-3">
          {navContainer.map((nav) => (
            <Fragment key={nav.id}>
              <span className="text-emerald-700 font-medium font-silkscreen">{nav.id}.</span>
              <a href={`#${nav.text}`} className={`hover:underline hover:underline-offset-4 hover:decoration-emerald-700 hover:decoration-3 transition-all duration-300 ease-linear font-mono ${activeSection === nav.text ? 'underline underline-offset-4 decoration-emerald-700 decoration-3' : ''}`}>
                {nav.text}
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar