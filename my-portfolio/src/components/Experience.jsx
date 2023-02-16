import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {IoIosSchool} from 'react-icons/io';
import {MdWork} from 'react-icons/md';
import TimeLineElementItem from './Reusable/TimeLineElementItem';

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="experience text-black">
          <VerticalTimeline lineColor="#E3DFFD">
            <VerticalTimelineElement
              date="2007 - 2011"
              dateClassName="text-red-500"
              iconStyle={{ backgroundColor: "#E3DFFD" }}
              icon={<IoIosSchool />}
            >
              <h3 className="vertical-timeline-element-title text-2xl font-semibold">
                Bachelor of Engineering
              </h3>
              <p>Information Science</p>
            </VerticalTimelineElement>
            <TimeLineElementItem heading="Test1" subHeading="Test2" body="sdfsfs" icon={<MdWork />} dateRange="2011 - 2014"></TimeLineElementItem>
            <TimeLineElementItem heading="Test1" subHeading="Test2" body="sdfsfs" icon={<MdWork />} dateRange="2011 - 2014"></TimeLineElementItem>
            <TimeLineElementItem heading="Test1" subHeading="Test2" icon={<MdWork />} dateRange="2011 - 2014"></TimeLineElementItem>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Experience;