import Footer from './pages/footer/footer.component';
import Home from './pages/home/home.component';
import Preprocessing from './pages/preprocessing/preprocessing.component';
import Scraping from './pages/scraping/scraping.component'
import Training from './pages/training/training.component'
import Visualization from './pages/visualization/visualization.component'

const App = () => {
  return (
    <div className="App">
      <Home/>
      <Scraping/>
      <Preprocessing/>
      <Visualization/>
      <Training/>
      <Footer/>
    </div>
  );
}

export default App;
