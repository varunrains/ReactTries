import classes from './event-item.module.css';
import Button from '../UI/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import RightIcon from '../icons/arrow-right-icon';
import Image from 'next/image';

const EventItem = (props) => {
    const { title, image, date, location, id } = props;

    const humanReadableObject = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year:'numeric'
    });

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (<li className={classes.item}>
        <Image src={`/${image}`} alt={title} width={250} height={160} />
        {//<img src={`/${image}`} alt={title} />}
        <div className={classes.content}>
            <div className={classes.summary}>
            <h2>{title}</h2>
                <div className={classes.date}> <DateIcon /> <time>{humanReadableObject}</time></div>
                <div className={classes.address}>
                    <AddressIcon/>
                <address>{formattedAddress}</address>
                </div>
            </div>
       
            <div className={classes.actions}>

                <Button link={exploreLink}><span>Explore Event</span>
                    <span className={classes.icon}> <RightIcon /></span>
                </Button>
            </div>
        </div>

    </li>);

};

export default EventItem;