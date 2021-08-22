
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';
import Details from './Components/Details/Details';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details">
            <Details/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
