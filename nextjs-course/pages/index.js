//React component indeed!!
import Link from 'next/link';

const HomePage = () => {
    return (<div>
        <h1>The Home Page</h1>
        <ul>
            <li>
                <Link href='/portfolio' replace>Portfolio</Link>
            </li>
            <li>
                <Link href='/clients'>Clients</Link>
            </li>
            <li></li>
            </ul>
    </div>);
};

export default HomePage;