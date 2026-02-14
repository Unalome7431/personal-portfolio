import CustomButton from "../components/CustomButton"
import { Github } from "lucide-react"
import IconButton from "../components/IconButton"

function About() {

  return (
    <div className="h-dvh bg-[#F6F6F6] mt-20 p-2">
      <CustomButton text={"Hello"}/>
      <CustomButton text={"Adrian"}/>
      <IconButton Icon={Github}/>
    </div>
  )
}

export default About