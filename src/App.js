import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home.js';
import Shop from './components/Shop';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
        <Route path='/shop/shoe' component={Item} />
      </Switch>
    </div>
  );
}

export default App;
