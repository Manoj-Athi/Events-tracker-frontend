import { BrowserRouter as Router} from 'react-router-dom';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './index.css';
import Routes from './Routes';
import Home from './components/Home';
import { fetchEvents } from './actions/events'

function App() {

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(fetchEvents())
  },[dispatch])


  return (
    <div className="App">
      <Router>
        <Home />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
