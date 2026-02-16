import IconButton from "./IconButton"
import { SquareArrowOutUpRight, Github } from "lucide-react"
import ProfileImage from '../assets/profile-placeholder.jpg'
import { useState } from "react"

function WorkCard({ title, desc, onGithubClick, onLinkClick, imgSrc }) {
  const [isHover, setIsHover] = useState(false)

  return (
    <div onMouseEnter={() => {setIsHover(true)}} onMouseLeave={() => {setIsHover(false)}} className="relative w-80 bg-white rounded-2xl mb-10">
      <div className="overflow-hidden rounded-tl-2xl rounded-tr-2xl">
        <img className={`${isHover ? 'scale-105 filter-none' : ''} filter-[invert(42%)_sepia(70%)_saturate(252%)_hue-rotate(100deg)_brightness(93%)_contrast(90%)] 
        transition-all duration-300 ease-in-out`} src={ProfileImage} alt="" />
      </div>

      <div className="p-3 flex flex-col gap-2">
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