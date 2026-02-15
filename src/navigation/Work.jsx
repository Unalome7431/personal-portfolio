import WorkCard from "../components/WorkCard"

function Work() {

  return (
    <div className="h-fit bg-[#F6F6F6] pl-2 pr-2">
      <p className="text-neutral-500 text-xl ml-22 mb-5 pt-50 font-mono">{"<Work />"}</p>

      <div className="ml-22 grid grid-cols-4">
        <WorkCard title={"Sui"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda!"} />
        <WorkCard title={"Sui"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda!"} />
        <WorkCard title={"Sui"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda!"} />
        <WorkCard title={"Sui"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda!"} />
        <WorkCard title={"Sui"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda!"} />
        <WorkCard title={"Sui"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda!"} />
        <WorkCard title={"Sui"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda!"} />
      </div>
    </div>
  )
}

export default Work