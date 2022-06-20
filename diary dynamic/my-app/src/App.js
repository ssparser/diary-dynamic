import { Switch,Route} from 'react-router-dom';
import Allmeet from './pages/Allmeet';
import Meet from './pages/Meet';
import Links from './pages/Links';
import Layout from './pages/Layout';

function App() {
  return (
  <Layout>
 
    <Switch>

<Route path='/' exact>
  
  <Allmeet/>
</Route>

<Route path='/pages/Meet.js'>
  <Meet/>
</Route>

<Route path='/pages/Allmeet.js'>
  <Allmeet/>
</Route>
</Switch>
</Layout>
 );
}
export default App;
