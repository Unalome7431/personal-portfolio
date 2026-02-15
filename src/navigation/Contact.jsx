import CustomButton from "../components/CustomButton"
import { Globe, Earth } from "lucide-react"

function Contact() {

  return (
    <div className="h-dvh pl-2 pr-2">
      <p className="text-neutral-500 text-xl ml-22 mb-5 pt-40 font-mono">{"<Contact />"}</p>

      <div className="flex flex-row gap-170 items-center">
        <div className="ml-22 mt-50 flex flex-col gap-7">
          <div>
            <h2 className="text-6xl font-extrabold text-emerald-700 mb-3 font-zilla-slab">Get In Touch</h2>
            <p className="text-2xl w-200 font-mono">I'm open for any kind of opportunities. Hit me up with projects, questions, or anything, even just saying hi! I will try my best to get back to you.</p>
          </div>

          <div className="flex gap-4">
            <CustomButton text={"Say Hello"} />
            <CustomButton text={"Back to Top"} />
          </div>
        </div>
        <Earth className="scale-2700 text-neutral-200 mt-50 animate-[spin_10s_linear_infinite] hover:text-emerald-700 transition-all duration-300 ease-in-out" />
      </div>
    </div>
  )
}

export default Contact