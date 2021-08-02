import { useRouter } from "next/router";
import { Fragment } from "react";

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import EventAlert from '../../components/UI/error-alert';
import { getEventById, getAllEvents, getFeaturedEvents } from "../../helpers/api-util";

const EventDetailPage = (props) => {

   // const router = useRouter();
   // const eventId = router.query.eventId;
   // console.log('eventi d', eventId);
    const event = props.selectedEvent;

    if (!event) {
        return <div className='center'> <p>Loading...</p> </div>;
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}

export async function getStaticProps(context) {

    const eventId = context.params.eventId;
    const event = await getEventById(eventId);

    return {
        props: {
            selectedEvent: event            
        },
        revalidate: 30
    }
};

export async function getStaticPaths(context) {
    const events = await getFeaturedEvents();
    const paths = events.map(event => ({ params: { eventId: event.id } }));

    return {
        paths: paths,
        fallback: true //Tell nextjs that there are more pages than specified
        //Show the fallback content, 404 page
        //This is a performance optimization that we can set
        //We cannot generate all the page for all the events
        //fallback:'blocking' --> This will be little slow
        //but it will wait for the entire page to load hence it takes time
    }
}

export default EventDetailPage;