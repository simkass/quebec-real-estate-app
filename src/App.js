import './App.css';
import Landing from './Landing';
import HorizontalScroll from 'react-scroll-horizontal'
import Data from './Data';

function App() {
  return (
    <div className='App'>

      <HorizontalScroll reverseScroll className='app-horizontal'>
        <Landing />
        <Data />
      </HorizontalScroll>

      <div className='app-vertical'>
        <Landing />
        <Data />
      </div>

    </div>
  );
}

export default App;
