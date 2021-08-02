import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";


const AllEventsPage = (props) => {
    const router = useRouter();
    const events = props.events;

    const findEventHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (<div>
        <EventsSearch onSearch={findEventHandler} />
        <EventList items={events} />
    </div>);
};

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events:events
        },
        revalidate:60
    }
}

export default AllEventsPage;