import Layout from '../components/layout/layout';
import '../styles/globals.css';
import { Provider } from 'next-auth/client';

/*Our profile page will have the "session" props for other pages it will be undefined */
//With this we can reduce the redundant http calls to server which was made by the 
//useSession hook
//This is recommended -- Adding this wrapper allow the "useSession" hook
//to not make the extra http call.
function MyApp({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
    <Layout>
      <Component {...pageProps} />
            </Layout>
        </Provider>
  );
}

export default MyApp;
