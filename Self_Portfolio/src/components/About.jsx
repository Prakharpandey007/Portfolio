import { HERO_CONTENT } from "../constants";

const About = () => {
  return (
    <div name='about' className="border-b border-neutral-900 pb-4 h-screen flex flex-col justify-center">
      <h1 className="my-20 text-center text-4xl">
        About<span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex justify-center items-center h-full">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center flex-col">
            <span className="text-6xl mb-4">Overview</span>
            <span className="text-xl text-opacity-40 pt-10 pl-10">
              {HERO_CONTENT}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
