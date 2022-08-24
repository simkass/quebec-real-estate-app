import Home from './pages/home/home.component';
import Preprocessing from './pages/preprocessing/preprocessing.component';
import Scraping from './pages/scraping/scraping.component'

const App = () => {
  return (
    <div className="App">
      <Home/>
      <Scraping/>
      <Preprocessing/>
    </div>
  );
}

export default App;
