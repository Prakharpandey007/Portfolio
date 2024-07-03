import React from "react";

import timelineElements from "./timelineElement";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const workIconStyles = { background: '#06D6A0', display: 'flex', alignItems: 'center', justifyContent: 'center' };
  const schoolIconStyles = { background: '#f9c74f', display: 'flex', alignItems: 'center', justifyContent: 'center' };

  return (
    <div className="min-h-screen font-montserrat text-gray-800">
      <h1 className="text-4xl text-center text-white pt-10 mb-10">Education</h1>
      <VerticalTimeline className="mt-8">
        {timelineElements.map((element, index) => {
          const isWorkIcon = element.icon === "work";
          const showButton = element.buttonText;

          return (
            <VerticalTimelineElement
              key={element.key || index} // Ensure unique key
              date={element.date}
              dateClassName="text-blue-100"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            
              className="shadow-lg p-8"
            >
              <h3 className="text-xl pt-1">{element.title}</h3>
              <h5 className="text-md">{element.location}</h5>
              <p className="my-6">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${isWorkIcon ? "workButton" : "schoolButton"} text-white py-2 px-4 rounded`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Education;
