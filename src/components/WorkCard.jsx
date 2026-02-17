import IconButton from "./IconButton"
import { SquareArrowOutUpRight, Github } from "lucide-react"
import { useState } from "react"

function WorkCard({ title, desc, onGithubClick, onLinkClick, imgSrc }) {
  const [isHover, setIsHover] = useState(false)

  return (
    <div onMouseEnter={() => {setIsHover(true)}} onMouseLeave={() => {setIsHover(false)}} className="relative w-160 rounded-2xl mb-20">
      <div className="overflow-hidden rounded-tl-2xl rounded-tr-2xl">
        <img className={`${isHover ? 'scale-105 filter-none' : ''} filter-[invert(42%)_sepia(70%)_saturate(252%)_hue-rotate(100deg)_brightness(93%)_contrast(90%)] 
        transition-all duration-300 ease-in-out`} src={imgSrc} alt="" />
      </div>

      <div className="p-3 h-43 flex flex-col justify-between gap-2 bg-white rounded-br-2xl rounded-bl-2xl">
        <div>
          <h3 className="font-medium font-rubik text-emerald-700">{title}</h3>
          <p className="font-rubik">{desc}</p>
        </div>

        <div className="flex gap-2">
          <IconButton Icon={Github} onClickFunction={onGithubClick} />
          <IconButton Icon={SquareArrowOutUpRight} onClickFunction={onLinkClick} />
        </div>
      </div>
    </div>
  )
}

export default WorkCard