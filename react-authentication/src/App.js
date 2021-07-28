

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useContext } from 'react';
import AuthContext from './store/auth-context';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
    const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
              {!authCtx.isLoggedIn && <Route path='/auth'>
                  <AuthPage />
              </Route>}
              
              {authCtx.isLoggedIn && <Route path='/profile'>
                  <UserProfile />
              </Route>}

              <Route path='*'>
                  <Redirect to='/'/>
              </Route>
      </Switch>
    </Layout>
  );
}

export default App;
