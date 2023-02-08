import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import timelineElements from "./timelineElements";
import "react-vertical-timeline-component/style.min.css";
import {FaGraduationCap} from 'react-icons/fa'
import { FaBriefcase } from "react-icons/fa";
const Timeline = () => {  
  let schoolIconStyles={background:'linear-gradient(to right, #ff512f, #f09819)', color:'#870000'}
  let workIconStyles={background:'linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% )',color:'#8360c3'}
  return (
    <>
      <div className="container-fluid bg-secondary text-light" id="work_exp">
        <p className="display-6 text-center">Work Experience</p>
        <VerticalTimeline lineColor="linear-gradient(to bottom, #fc5c7d, #6a82fb)">
          {timelineElements.map((element) => {
            let isworkIcon=element.icon==="work"
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isworkIcon ? workIconStyles : schoolIconStyles}
                icon={isworkIcon?<FaBriefcase/> : <FaGraduationCap/>}
              >
                <h3 className="vertical-timeline-component-title text-dark">{element.title}</h3>
                <h6 className="vertical-timeline-component-subtitle text-secondary">{element.location}</h6>
                <p id="description" className="text-dark">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Timeline;
