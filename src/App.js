import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
