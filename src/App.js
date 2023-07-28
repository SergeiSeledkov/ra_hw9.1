import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Drift from './pages/Drift';
import Forza from './pages/Forza';
import Home from './pages/Home';
import TimeAttack from './pages/TimeAttack';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
            <Route path="/" exact component={Home} />
            <Route path="/drift" component={Drift} />
            <Route path="/timeattack" component={TimeAttack} />
            <Route path="/forza" component={Forza} />
        </div>
      </div>
    </Router>
  );
}

export default App;
