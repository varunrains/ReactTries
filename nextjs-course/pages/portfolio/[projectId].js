import {useRouter} from 'next/router';

const PortfolioProjectPage = () => {
    const router = useRouter();

   //router.pathname;
   //router.query

    //send a request to some backend server
    //to fetch the piece of data with an 'id' of router.query.projectId
    return (
        <div>
            <h1>The Portfolio Project page</h1>
        </div>
    );

};

export default PortfolioProjectPage;