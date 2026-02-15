import { useState } from "react"

function ExperienceCard({ title, orgs, desc, label, timeline }) {
  const [isHover, setIsHover] = useState(false)

  return (
    <div onMouseEnter={() => {setTimeout(() => setIsHover(true), 350)}} onMouseLeave={() => {setTimeout(() => setIsHover(false), 300)}} className="flex flex-row justify-between pl-4 pr-4 border-2 border-emerald-700 rounded-tr-2xl rounded-br-2xl ml-2 mb-0.5 hover:bg-neutral-200 transition-all duration-300 ease-in-out w-270 h-50 hover:w-360">
      <div className="flex flex-col justify-around">
        <div className="flex flex-col gap-2 w-180">
          <div>
            <h3 className="text-emerald-700 text-2xl font-extralight font-silkscreen">{title}</h3>
            <h4 className="text-emerald-600 text-xl font-extralight font-mono">{orgs}</h4>
          </div>
          <p className="font-mono">{desc}</p>
        </div>

        <div className="bg-emerald-700 text-white font-silkscreen w-40 p-2 rounded-2xl text-center">
          {label}
        </div>
      </div>

      <span className={`flex items-center text-emerald-700 font-bold font-mono text-5xl transition-all duration-300 ease-in ${isHover ? 'opacity-100 m-4' : 'opacity-0'}`}>{timeline}</span>
    </div>
  )
}

export default ExperienceCard