
import { useRouter } from "next/router";

const ClientsProjectPage = () => {
    const router = useRouter();

    console.log(router.query);

    const loadProjectHandler = () => {
        //replace will not allow the user to go back!!
        //router.replace('/clients/max/projecta');
        router.push('/clients/max/projecta');
    };

    return (<div>
        <h1>The projects of a given Client</h1>
        <button onClick={loadProjectHandler}>Load a project A</button>
       
    </div>);
};

export default ClientsProjectPage;