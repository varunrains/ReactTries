import React from 'react';
import {VerticalTimelineElement} from 'react-vertical-timeline-component';
//import 'react-vertical-timeline-component/style.min.css';

const TimeLineElementItem = ({heading,subHeading, body, dateRange, icon}) => {
  
    return (
      <VerticalTimelineElement
        date={dateRange}
        dateClassName="text-red-500"
        iconStyle={{ backgroundColor: "#E3DFFD" }}
        icon={icon}
        //className="vertical-timeline-element--education"
      >
        <h3 className="text-2xl font-bold">{heading}</h3>
        <p ><span className='font-semibold'>{subHeading}</span></p>
        <p><span className='italic'>{body}</span></p>
      </VerticalTimelineElement>
    );
}

export default TimeLineElementItem;