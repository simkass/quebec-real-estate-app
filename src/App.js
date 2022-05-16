import './App.css';
import Landing from './Landing';
import Intro from './Intro'
import HorizontalScroll from 'react-scroll-horizontal'
import Cleaning from './Cleaning';
import Template from './Template';

function App() {
  return (
    <div className='App'>

      <HorizontalScroll reverseScroll className='app-horizontal'>
        <Landing />
        <Template />
      </HorizontalScroll>

      <div className='app-vertical'>
        <Landing />
        <Template />
      </div>

    </div>
  );
}

export default App;
