import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import EventAlert from '../../components/UI/error-alert';

const EventDetailPage = () => {

    const router = useRouter();

    const eventId = router.query.eventId;
    console.log('eventi d', eventId);
    const event = getEventById(eventId);

    if (!event) {
        return <ErrorAlert> <p> No event found!</p> </ErrorAlert >;
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

export default EventDetailPage;