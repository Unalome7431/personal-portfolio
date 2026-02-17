import WorkCard from "../components/WorkCard"
import SealArenaImage from '../assets/seal-arena.png'

function Work() {

  return (
    <div className="h-fit pl-2 pr-2">
      <p className="text-neutral-500 text-xl ml-22 mb-5 pt-50 font-mono">{"<Work />"}</p>

      <div className="ml-22 grid grid-cols-2">
        <WorkCard title={"Seal Arena - Web3 Sui Devworkshop"} desc={"Team project that implements NFT as game card using Sui Blockchain Ecosystem. With Move to make smart contracts and React JS for the front-end"} imgSrc={SealArenaImage} />
        <WorkCard title={"Reserved"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda!"} imgSrc={SealArenaImage} />
        <WorkCard title={"Reserved"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda!"} imgSrc={SealArenaImage}/>
        <WorkCard title={"Reserved"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda!"} imgSrc={SealArenaImage} />
      </div>
    </div>
  )
}

export default Work