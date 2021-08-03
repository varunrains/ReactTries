//import { getFeaturedEvents } from "../dummy-data";
//special component to add the meta tag
import Head from 'next/head';
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = (props) => {
    //const featuredEvents = getFeaturedEvents();

    return (<div>
        <Head>
            <title>NextJS Events</title>
            <meta name='description' content='find a lot of great content'/>
        </Head>
        <EventList items={props.events} />
    </div>);
};

//PRE-rendering of the home-page with pre-filled data
//so that search engine crawlers understand our website
// a little better and it will optimize the search
//and eventually it will improve our website
//traffic
export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            events: featuredEvents
        },
        revalidate:1800 //Every half hour our page will be re-generated
    }
}

export default HomePage;