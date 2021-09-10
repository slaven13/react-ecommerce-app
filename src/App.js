import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import { Route, Switch, Link } from 'react-router-dom';

export const HatsPage = (props) => {
  console.log(props.match.params.hatId);
  return (
    <div>
      <Link to='/'>Home Page</Link>
      <button onClick={() => props.history.push('/')} title='Home' />
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>      
    </div>
  );
}

export default App;
