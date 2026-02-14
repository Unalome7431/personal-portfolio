import IconButton from "../components/IconButton"
import { Github, Instagram, Linkedin } from "lucide-react"
import ProfilePlaceholder from '../assets/profile-placeholder.jpg'

function Start() {

  return (
    <div className="h-dvh bg-[#F6F6F6] pt-24 p-2">
      <div className="w-px h-dvh border-[1.5px] border-emerald-700 absolute left-20"></div>

      <div className="ml-22">
        <p className="text-neutral-500 text-xl">{"<Start />"}</p>

        <div className="flex justify-between">
          <div>
            <div className="mt-50">
              <p className="text-5xl">Hello, I'm <span className="text-emerald-700">Velengio Deriksen Charles</span></p>
              <p className="text-4xl">I <span className="text-emerald-700">learn</span> and <span className="text-emerald-700">develop</span> stuff</p>
            </div>

            <div className="mt-5 flex gap-2">
              <IconButton Icon={Github}/>
              <IconButton Icon={Instagram}/>
              <IconButton Icon={Linkedin}/>
            </div>
          </div>

          <img className="w-100 mr-22 mt-20" src={ProfilePlaceholder} alt="Profile" />
        </div>
        
        
      </div>
      
    </div>
  )
}

export default Start