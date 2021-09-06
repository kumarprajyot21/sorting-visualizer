import BarsList from './components/Bars/BarsList';
import Layout from './components/Layout/Layout';
import RotateScreen from './components/Layout/RotateScreen';
import { Route, Switch, Redirect } from 'react-router-dom';

// heap sort bug at array size 45
function App() {
  return (
    <>
      <RotateScreen />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/bubble-sort' />
        </Route>
        <Route path='/:sortMethod'>
          <Layout>
            <BarsList />
          </Layout>
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </>
  );
}

export default App;
