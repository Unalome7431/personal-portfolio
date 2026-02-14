function NavBar() {

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-20 border-b shadow-md bg-[#F8F6F4]">
      <div className="flex gap-3 justify-between mr-7 ml-7 mt-7">
        <span className="text-emerald-600 font-medium text-2xl">{"<"}Velengio{"/>"}</span>
        <div className="flex gap-3">
          <span className="text-emerald-600 font-medium">1.</span>
          <span className="hover:underline hover:underline-offset-4 hover:decoration-emerald-600 hover:decoration-3 transition-all duration-300 ease-linear">
            About
          </span>
          <span className="text-emerald-600 font-medium">2.</span>
          <span className="hover:underline hover:underline-offset-4 hover:decoration-emerald-600 hover:decoration-3 transition-all duration-300 ease-linear">
            Education
          </span>
          <span className="text-emerald-600 font-medium">3.</span>
          <span className="hover:underline hover:underline-offset-4 hover:decoration-emerald-600 hover:decoration-3 transition-all duration-300 ease-linear">
            Experience
          </span>
          <span className="text-emerald-600 font-medium">4.</span>
          <span className="hover:underline hover:underline-offset-4 hover:decoration-emerald-600 hover:decoration-3 transition-all duration-300 ease-linear">
            Work
          </span>
          <span className="text-emerald-600 font-medium">5.</span>
          <span className="hover:underline hover:underline-offset-4 hover:decoration-emerald-600 hover:decoration-3 transition-all duration-300 ease-linear">
            Contact
          </span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar