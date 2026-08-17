import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

import upenn from '../assets/images/work_logo/upenn.png';
import gm from '../assets/images/work_logo/gm.png';
import bruker from '../assets/images/work_logo/bruker.png';
import wake_forest from '../assets/images/work_logo/wake_forest.png';
import columbia from '../assets/images/work_logo/columbia.png';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2026 - Present"
            iconStyle={{ background: '#dadada', color: 'rgb(39, 40, 34)' }}
            icon={
              <img 
                src={upenn} 
                alt="upenn logo"
                style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                }}
              />}
            >
            <h3 className="vertical-timeline-element-title">Graduate Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Philadelphia, PA</h4>
            <p>
              Research & Development, Failure Analysis, Design of Experiments, Data Processing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2025 - Aug 2026"
            iconStyle={{ background: '#dadada', color: 'rgb(39, 40, 34)' }}
            icon={
              <img 
                src={gm} 
                alt="gm logo"
                style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                }}
              />}
          >
            <h3 className="vertical-timeline-element-title">Mechanical Hardware Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Warren, MI</h4>
            <p>
              Technical Project Management, Mechanical Design, Prototyping, Testing, Validation
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - May 2025"
            iconStyle={{ background: '#dadada', color: 'rgb(39, 40, 34)' }}
            icon={
              <img 
                src={bruker} 
                alt="bruker logo"
                style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                }}
              />}
          >
            <h3 className="vertical-timeline-element-title">Quality Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Carteret, NJ</h4>
            <p>
              Automation, Full-stack Development, User Experience, Design, Product Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2023 - Aug 2023"
            iconStyle={{ background: '#dadada', color: 'rgb(39, 40, 34)' }}
            icon={
              <img 
                src={wake_forest} 
                alt="wake forest logo"
                style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                }}
              />}
          >
            <h3 className="vertical-timeline-element-title">Biomechanics Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Winston-Salem, NC</h4>
            <p>
              Scripting, Data Governance, Statistical Analysis, Data Visualization
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022 - May 2024"
            iconStyle={{ background: '#dadada', color: 'rgb(39, 40, 34)' }}
            icon={
              <img 
                src={columbia} 
                alt="columbia logo"
                style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                }}
              />}
          >
            <h3 className="vertical-timeline-element-title">Undergraduate Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
            <p>
              Machine Learning, Mobile App Development, User Experience, Data Collection
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;