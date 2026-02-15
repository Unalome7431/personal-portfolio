import CustomButton from "../components/CustomButton"
import { Github } from "lucide-react"
import IconButton from "../components/IconButton"
import { useState } from "react"
import { text } from "motion/react-client"

function About() {
  const divBoxId = [
    {id: 1, text: "Hi, my name is Velengio Deriksen Charles and I enjoy learning and developing stuff living on the internet. My interest in codes is coming from my childhood when I used to playing games everyday. Back in 2021, I'm interested on learning how to make games. I searched every tutorials I could find on the internet and started my own journey in game developing."},
    {id: 2, text: "Long story short, I turned the wheel and decided to learn web developing. I was so happy back when I'm able to change the background color or centering element for the first time. From that on, I pursue web developing as my career. While I'm proud of my progress, I consider myself a lifelong learner, constantly pushing the boundaries of my current skillset to reach new professional milestones."},
    {id: 3, text: "My main focus right now is to work on more projects that are accessible and could bring an impactful digital experiences to the users while gradually expanding my skillset. I also recently started to learn about Blockchain Ecosystem and looking forward to Web3 developing in the future. I'm very enthusiast on what more to comes in this vast world of technology."}
  ]

  return (
    <div className="h-fit bg-[#F6F6F6] pl-2 pr-2">
      <p className="text-neutral-500 text-xl ml-22 mb-5 pt-70 font-mono">{"<About />"}</p>
      <div className="flex flex-row gap-5">
        <div>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">01    </span><span className="text-neutral-400">// Nice to meet you</span>
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">02    </span><span className="text-blue-500">class </span><span className="text-emerald-600">Velengio Deriksen Charles </span>{"{"}
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">03    </span><span className="text-neutral-400">  // Coding is Fun!</span>
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">04    </span><span className="text-emerald-600">  constructor</span>() {"{"}
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">05    </span><span className="text-orange-400">    this</span>.<span className="text-red-500">name</span> = <span>'Velengio Deriksen Charles'</span>
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">06    </span><span className="text-orange-400">    this</span>.<span className="text-red-500">birthplace</span> = <span>'Pontianak'</span>
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">07    </span><span className="text-orange-400">    this</span>.<span className="text-red-500">email</span> = <span>'velengio@gmail.com'</span>
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">08    </span>{"}"}
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">09    </span><span className="text-neutral-400">  // Learn a lot!</span>
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">10    </span><span className="text-emerald-600">  education</span>() {"{"}
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">11    </span><span className="text-blue-500">    return</span> {"{["}
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">12    </span>      {"{"}<span className="text-red-500">2024 - Now</span>: Bachelor of Computer Science at Universitas Sebelas Maret Surakarta{"}"},
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">13    </span>      {"{"}<span className="text-red-500">2022 - Now</span>: Bina Mulia High School Pontianak{"}"}
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">14    </span>    {"]}"}
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">15    </span>  {"}"}
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">16    </span><span className="text-neutral-400">  // I will gradually expand my skillsets</span>
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">17    </span><span className="text-emerald-600">  skills</span>() {"{"}
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">18    </span><span className="text-blue-500">    return</span> {"{["}
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">19    </span>      {"{"}<span className="text-red-500">Languages</span>: 'C', 'C++', 'Java', 'Javascript', 'HTML', 'CSS', 'Move'{"}"},
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">20    </span>      {"{"}<span className="text-red-500">Frameworks</span>: 'React', 'Tailwind', 'JavaFX'{"}"},
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">21    </span>      {"{"}<span className="text-red-500">Tools</span>: 'Git', 'Maven', 'SceneBuilder'{"}"}
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">22    </span>    {"]}"}
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">23    </span>  {"}"}
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">24    </span>{"}"}
            </code>
          </pre>
          <pre className="m-0 p-0 w-full hover:bg-emerald-100">
            <code className="px-10 py-0"><span className="select-none">25    </span><span className="text-neutral-400">// Ciao!</span>
            </code>
          </pre>
        </div>

        <div className="flex gap-5 flex-col w-150 justify-center pr-8 pl-10 p-4 rounded-tl-2xl border-t-3 border-l-3 border-emerald-700">
          {
            divBoxId.map((box) => {
              const [isHover, setIsHover] = useState(false)
              
              return (
              <div className="relative inline-block">
                <div className={`absolute inset-0 border-0 border-b-3 border-r-3 border-emerald-700 translate-1 translate-y-1 rounded-2xl z-0 ${isHover ? 'translate-2 translate-y-3 translate-z-3' : ''} transition-all duration-300 ease-in-out`}></div>

                <div key={box.id} onMouseEnter={() => {setIsHover(true)}} onMouseLeave={() => {setIsHover(false)}} className={`relative z-1 rounded-2xl p-2 transition-transform duration-300 ease-in-out bg-[#F6F6F6]`}>
                  <p className={`${isHover ? '-translate-5 -translate-y-1 scale-105 drop-shadow-emerald-700' : 'drop-shadow-emerald-900/10'} drop-shadow-2xl  transition-all duration-300 ease-in-out text-justify font-mono`}>
                    {box.text}
                  </p>
                </div>
              </div>
            )})
          }
        </div>
      </div>
    </div>
  )
}

export default About