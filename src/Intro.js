import './Intro.css';

function Intro() {
  return (
    <div className='Intro'>
      <div className='intro-left'>
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
              The first script goes through all the pages of listing thumbnails and acquires the listings’ individual links. </p>
            <div className='intro-picture3'></div>
            <div className='intro-picture-desc'><p>Listings' individual links.</p></div>
            <p>The second script goes through all the scraped links and loads them one by one using Beautiful Soup. By reading the HTML tags in the loaded pages, we can scrape the following data points for every listing page.</p>
            <div className='intro-feature-list'>
              <p><b>Ordinal values: </b>Number of Bedrooms, Number of of Bathrooms, Number of Levels</p>
              <p><b>Numerical values: </b>Living Area, Lot Dimensions, Listing Date, Year of Construction, Final Selling Price</p>
              <p><b>Categorical values: </b>Subtype, Location</p>
            </div>
          </div>
        </div>
      </div>
      <div className='intro-pictures'>
        <div className='intro-picture2'></div>
        <div className='intro-picture-desc'><p>Listing thumbnails.</p></div>
        <div className='intro-picture4'></div>
        <div className='intro-picture-desc'><p>Exemple of HTML tag holding information (number of bedrooms).</p></div>
      </div>
    </div>
  );
}

export default Intro;
