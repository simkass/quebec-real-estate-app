import './Landing.css';

function Landing() {
  return (
    <div className='Landing'>
      <div className='landing'>
        <div className='landing-left'>
          <div className='landing-left-photo'></div>
          <div className='landing-left-photo-description'><p>Home located in Lac-Brome, Quebec - Designed by Thomas Balaban</p></div>
        </div>
        <div className='landing-right'>
          <div className='landing-right-title'>
            <h1>Quebec</h1>
            <h1>Housing Market</h1>
            <h1>Analysis</h1>
          </div>
          <div className='landing-right-description'>
          <p>By designing a web scraper, I was able to gather information on over 100k sold homes from the past 15 years in Quebec.
            I then used visualization tools to generate a series of graphs offering a unique insight into Quebec's housing market.
            Finally, I designed a neural network using Tensorflow. This allowed me to train a model capable of predicting
            a home's final selling price with a 15% margin of error.</p>
          </div>
          <div className='landing-right-start'><p>Scroll to start.</p></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
