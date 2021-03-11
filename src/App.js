import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home.js';
import Shop from './components/Shop';
import ItemInfo from './components/ItemInfo';
import Error from './components/Error';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route path='/shop:id' component={ItemInfo} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
