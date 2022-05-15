import './Intro.css';

function Intro() {
  return (
    <div className='Intro'>
      <div className='intro-title'><h1>Acquiring the data.</h1></div>
      <div className='intro-info'>
        <div className='intro-text'>
            <p>In Quebec, the only website (I could find) that openly exposes data on sold houses is <a href="https://duproprio.com/en">DuProprio</a>. 
              This website allows homeowners to sell their houses without the use of an agent. 
              The data I was interested in was sold homes and condos, anywhere in Quebec. 
              Luckily, DuProprio allows users to filter their search using these exact criteria.</p>
              <div className='intro-picture1'></div> 
              <div className='intro-picture-desc'><p>DuProprio Search Filters.</p></div>
              <p>Using <a href="https://beautiful-soup-4.readthedocs.io/en/latest/">Beautiful Soup</a>, I was able to build two Python scripts to scrape past listings from DuProprio. 
                The first script goes through all the pages of listings previews and acquires the listings’ individual links. </p>
        </div>
        <div className='intro-pictures'></div>
      </div>
    </div>
  );
}

export default Intro;
