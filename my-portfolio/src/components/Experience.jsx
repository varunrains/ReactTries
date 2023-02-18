import React from 'react';
import {VerticalTimeline} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {IoIosSchool} from 'react-icons/io';
import {MdWork} from 'react-icons/md';
import TimeLineElementItem from './Reusable/TimeLineElementItem';

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white">
            Experience
          </p>
        </div>
        <VerticalTimeline lineColor="#E3DFFD" className='z-500'>
          {/* 
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
            </VerticalTimelineElement> */}
          <TimeLineElementItem
            heading="Associate Architect/Principal Developer"
            subHeading="Eurofins IT Solutions India Pvt. Ltd"
            body="Pharmaceutical Testing Company"
            icon={<MdWork />}
            dateRange="2022 - Present"
          ></TimeLineElementItem>
          <TimeLineElementItem
            heading="Principal Software Engineer"
            subHeading="Eurofins IT Solutions India Pvt. Ltd"
            body="Pharmaceutical Testing Company"
            icon={<MdWork />}
            dateRange="2020 - 2022"
          ></TimeLineElementItem>
          <TimeLineElementItem
            heading="Senior Software Engineer"
            subHeading="Eurofins IT Solutions India Pvt. Ltd"
            body="Pharmaceutical Testing Company"
            icon={<MdWork />}
            dateRange="2015 - 2020"
          ></TimeLineElementItem>
          <TimeLineElementItem
            heading="Software Engineer"
            subHeading="Allscripts"
            body="Healthcare Product Company"
            icon={<MdWork />}
            dateRange="2014 - 2015"
          ></TimeLineElementItem>
          <TimeLineElementItem
            heading="Software Engineer"
            subHeading="HCL Technologies"
            body="Software Services Company"
            icon={<MdWork />}
            dateRange="2011 - 2014"
          ></TimeLineElementItem>
          <TimeLineElementItem
            heading="Bachelor of Engineering"
            subHeading="Information Science"
            icon={<IoIosSchool />}
            dateRange="2007 - 2011"
          ></TimeLineElementItem>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;