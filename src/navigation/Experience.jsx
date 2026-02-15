import ExperienceCard from "../components/ExperienceCard"

function Experience() {

  return (
    <div className="h-fit bg-[#F6F6F6] pl-2 pr-2">
      <p className="text-neutral-500 text-xl ml-22 mb-5 pt-50 font-mono">{"<Experience />"}</p>
      <div className="ml-16 mr-24">
        <ExperienceCard title={"Staff of Technology and Business"} orgs={"BEM FATISDA UNS"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nostrum!"} label={"Organization"} timeline={"2026 - Now"} />
        <ExperienceCard title={"Participant of Superteam Campus Club"} orgs={"Superteam Indonesia"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nostrum!"} label={"Workshop"} timeline={"2026 - Now"} />
        <ExperienceCard title={"Participant of Web3 Sui Devworkshop"} orgs={"Sui Indonesia Community Workshop"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nostrum!"} label={"Workshop"} timeline={"2025"} />
        <ExperienceCard title={"Staff of Event"} orgs={"P!NGFEST"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nostrum!"} label={"Event"} timeline={"2025"} />
      </div>
    </div>
  )
}

export default Experience