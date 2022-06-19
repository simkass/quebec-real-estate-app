import './App.css';
import Home from './Home'
import Scraping from './Scraping';
import Preprocessing from './Preprocessing';
import Visualization from './Visualization';

function App() {
  return (
    <div className='App'>
      <Home />
      <Scraping />
      <Preprocessing />
      <Visualization />
    </div>
  );
}

export default App;
