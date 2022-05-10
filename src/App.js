import './App.css';
import Landing from './Landing';
import Intro from './Intro'
import HorizontalScroll from 'react-scroll-horizontal'

function App() {
  return (
    <div className="App">\
    <HorizontalScroll reverseScroll>
      <Landing />
      <Intro />
      </HorizontalScroll>
    </div>
  );
}

export default App;
