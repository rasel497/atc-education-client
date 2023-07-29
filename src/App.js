import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/shared/heading/Header';
import Home from './components/home/home/Home';
import About from './components/about/About';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/event' />
          <Route path='/partners' />
          <Route path='/trainnig' />
          <Route path='/research' />
          <Route path='/teams' />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router >
    </>
  );
}

export default App;
