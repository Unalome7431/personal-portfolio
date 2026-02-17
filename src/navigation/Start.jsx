import IconButton from "../components/IconButton"
import { Github, Instagram, Linkedin } from "lucide-react"
import ProfilePlaceholder from '../assets/profile-placeholder.jpg'

function Start() {

  return (
    <div className="h-fit pt-24 p-2">
      <div className="w-px h-1170 border-[1.5px] border-emerald-700 absolute left-20"></div>

      <div className="ml-22">
        <p className="text-neutral-500 text-xl font-mono">{"<Start />"}</p>

        <div className="flex justify-between">
          <div>
            <div className="mt-50">
              <p className="text-5xl font-mono">Hello, I'm <span className="text-emerald-700 font-extrabold font-zilla-slab">Velengio Deriksen Charles</span></p>
              <p className="text-4xl font-mono">I <span className="text-emerald-700 font-bold font-bungee">learn</span> and <span className="text-emerald-700 font-bold font-silkscreen">develop</span> stuff</p>
            </div>

            <div className="mt-5 flex gap-2">
              <IconButton Icon={Github}/>
              <IconButton Icon={Instagram}/>
              <IconButton Icon={Linkedin}/>
            </div>
          </div>

          <img className="w-100 mr-22 mt-20 transition-all duration-300 rounded-2xl
          filter-[invert(42%)_sepia(70%)_saturate(252%)_hue-rotate(100deg)_brightness(93%)_contrast(90%)] 
          hover:filter-none" src={ProfilePlaceholder} alt="Profile" />
        </div>
      </div>
    </div>
  )
}

export default Start