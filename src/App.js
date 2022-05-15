import './App.css';
import Landing from './Landing';
import Intro from './Intro'
import HorizontalScroll from 'react-scroll-horizontal'

function App() {
  return (
    <div className='App'>
      <HorizontalScroll reverseScroll className='app-horizontal'>
        <Landing />
        <Intro />
      </HorizontalScroll>
      <div className='app-vertical'>
        <Landing />
        <Intro />
      </div>
    </div>
  );
}

export default App;
