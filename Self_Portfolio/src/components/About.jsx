import { HERO_CONTENT } from "../constants"
const About = () => {
  return (
<div className="border-b border-neutral-900 pb-4">
    <h1 className="my-20 text-center text-4xl">About
    <span className="text-neutral-500"> Me</span></h1>
    <div className="flex">
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center flex-col"> 
                <span className="text-6xl mb-4">Overview</span> 
                <span className="text-2xl text-opacity-40 pt-10 pl-10">{HERO_CONTENT}</span>
            </div>
        </div>
    </div>
</div>
  )
}

export default About