import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from '../../components/events/results-title';
import { Fragment, useEffect, useState } from "react";
import Button from "../../components/UI/button";
import ErrorAlert from "../../components/UI/error-alert";
import { getFilteredEvents } from "../../helpers/api-util";
import useSWR from 'swr';
import Head from 'next/head';

const FilteredEventsPage = (props) => {
    const [events, setEvents] = useState([]);
    const router = useRouter();

    const filteredData = router.query.slug;

    const { data, error } = useSWR('https://react-routing-af145-default-rtdb.firebaseio.com/events.json');

    useEffect(() => {
        if (data) {
            const events = [];

            for (const key in data) {
                events.push({
                    id: key,
                    ...data[key]
                });
            }
            setEvents(events);
        }

    }, [data]);

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    const pageHeadData = <Head>
        <title>Filtered Events</title>
        <meta name='description' content={`All events for ${numMonth} / ${numYear}`} />
    </Head>;


    if (!events) {
        return <Fragment>  {pageHeadData} <p className='center'>Loading...</p></Fragment>;
    }

   


    // if (props.hasError) {
    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12 || error) {
        return
        (<Fragment>
            {pageHeadData}
            <ErrorAlert> <p className='center'>Invalid filter please adjust your values..</p></ErrorAlert>
            <div className='center'> <Button link='/events'>Show All events</Button></div>
        </Fragment>);
    }


    let filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
    });

   // const filteredEvents = props.events;//getFilteredEvents({ year: numYear, month: numMonth });

    if (!filteredEvents || filteredEvents.length === 0) {

        return <Fragment><ErrorAlert> <p className='center'>No events found for the selected filters</p> </ErrorAlert>
            <div className='center'> <Button link='/events'>Show All events</Button></div>
        </Fragment>
    }

    // const date = new Date(props.date.year, props.date.month - 1);
    const date = new Date(numYear, numMonth - 1);
    return (<Fragment>
        <ResultsTitle date={date}/>
        <EventList items={filteredEvents}/>
    </Fragment>);
};



//DONT use serverside content rendering
//if you are using the client side rendering
//It makes no sense.
export async function getServerSideProps(context) {
    const { params } = context;
    const filteredData = params.slug;
    //if (!filteredData) {
    //    return <p className='center'>Loading...</p>;
    //}
    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return {
           // notFound:true
            props: {
                hasError:true
            }
        }
    }
    
    const filteredEvents = await getFilteredEvents({ year: numYear, month: numMonth });

    return {
        props: {
            events: filteredEvents,
            date: {
                year: numYear,
                month: numMonth
            }
        }
    }
}



export default FilteredEventsPage;