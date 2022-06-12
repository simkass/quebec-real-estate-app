import './Data.css';

function Data() {
  return (
    <div className='Data'>
      <div className='data-left'>
        <div className='data-left-title'><h1>Acquiring the Data.</h1></div>
        <div className='data-left-text data-left-text1'><p>In Quebec, the only website (I could find) that openly exposes data on sold houses is <a href="https://duproprio.com/en">DuProprio</a>.
          This website allows homeowners to sell their houses without the use of an agent.
          The data I was interested in was sold homes and condos, anywhere in Quebec.
          Luckily, DuProprio allows users to filter their search using these exact criteria.</p></div>
        <div className='data-left-img1'>
          <div className='img'>
            <div className='img-img data-left-img1-img'></div>
            <div className='img-desc data-left-img1-desc'><p>DuProprio Search Filters.</p></div>
          </div>
        </div>
        <div className='data-left-text data-left-text2'>
          <p>Using <a href="https://beautiful-soup-4.readthedocs.io/en/latest/">Beautiful Soup</a>, I was able to build two Python scripts to scrape past listings from DuProprio.
            The first script goes through all the pages of listing thumbnails and acquires the listings’ individual links. </p>
        </div>
        <div className='data-left-img2'>
          <div className='img'>
            <div className='img-img data-left-img2-img'></div>
            <div className='img-desc data-left-img2-desc'><p>DuProprio individual listing links in a .txt file.</p></div>
          </div>
        </div>
        <div className='data-left-text data-left-text3'>
          <p>The second script goes through all the scraped links and loads them one by one using Beautiful Soup. By reading the HTML tags in the loaded pages, we can scrape the following data points for every listing page.</p>
        </div>
        <div className='data-left-features'>
          <div className='data-left-features-list'>
            <p><b>Ordinal values: </b>Number of Bedrooms, Number of of Bathrooms, Number of Levels</p>
            <p><b>Numerical values: </b>Living Area, Lot Dimensions, Listing Date, Year of Construction, Final Selling Price</p>
            <p><b>Categorical values: </b>Subtype, Location</p>
          </div>
        </div>
      </div>
      <div className='data-right'>
      <div className='data-right-img1'>
          <div className='img'>
            <div className='img-img data-right-img1-img'></div>
            <div className='img-desc data-right-img1-desc'><p>Listing thumbnails.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
