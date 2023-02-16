import React from 'react';
import {VerticalTimelineElement} from 'react-vertical-timeline-component';
//import 'react-vertical-timeline-component/style.min.css';

const TimeLineElementItem = ({heading,subHeading, body, dateRange, icon}) => {
  
    return (
      <>
        <VerticalTimelineElement
          date={dateRange}
          dateClassName="text-red-500"
          iconStyle={{ backgroundColor: "#E3DFFD" }}
          icon={icon}
          //className="vertical-timeline-element--education"
        >
          <h3 className="text-2xl font-semibold">
            {heading}
          </h3>
          <p>{subHeading}</p>
          <p>{body}</p>
        </VerticalTimelineElement>
      </>
    );
}

export default TimeLineElementItem;