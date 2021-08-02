import { useEffect, useState } from "react";
import useSWR from 'swr';

const LastSalesPage = (props) => {
    //Initial state from getStaticProps from server side
    const [sales, setSalesState] = useState(props.sales);
    //const [isLoading, setIsLoading] = useState(false);

    //YOU can write your own fetcher function as a second argument 
    //which will provide you with more convienent way of data fetching
    const { data, error } = useSWR('https://react-routing-af145-default-rtdb.firebaseio.com/sales.json');

    useEffect(() => {
        if (data) {
            let transformedSales = [];

            for (const key in data) {
                transformedSales.push({ id: key, username: data[key].username, volume: data[key].volume });
            }
            setSalesState(transformedSales);
        }
    }, [data]);

    //useEffect(() => {
    //    setIsLoading(true);
    //    fetch('https://react-routing-af145-default-rtdb.firebaseio.com/sales.json').then(resp => resp.json()).then(data => {

    //        let transformedSales = [];

    //        for (const key in data) {
    //            transformedSales.push({ id: key, username: data[key].username, volume: data[key].volume });
    //        }

    //        setSalesState(transformedSales);
    //        setIsLoading(false);
    //    });

    //}, []);

    if (error) {
        return <p>Failed to Load.. </p>
    }

    if (!data && !sales) {
        return <p>Loading.. </p>
    }

    //if (!sales) {
    //    return <p>No data yet!!</p>
    //}

    return <ul>
        {sales.map(sale => <li key={sale.id}>{sale.username} - {sale.volume}</li>)}
    </ul>;
};

export async function getStaticProps() {
    //we cannot use hooks here
    //Remember this is a server side code
    //
    fetch('https://react-routing-af145-default-rtdb.firebaseio.com/sales.json').then(resp => resp.json()).then(data => {

            let transformedSales = [];

            for (const key in data) {
                transformedSales.push({ id: key, username: data[key].username, volume: data[key].volume });
        }
        //The return should be async
        return {
            props: {
                sales: transformedSales
            },
            revalidate: 10
        };
        });

}

export default LastSalesPage;