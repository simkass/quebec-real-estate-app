import "./Scraping.css";

function Scraping() {
  return (
    <div className="Scraping">
      <div className="scraping">
        <div className="title">
          <h1>Acquiring the Data.</h1>
        </div>

        <div className="text">
          <p>
            In Quebec, the only website (I could find) that openly exposes data
            on sold houses is <a href="https://duproprio.com/en">DuProprio</a>.
            This website allows homeowners to sell their houses without the use
            of an agent. The data I was interested in was sold homes and condos,
            anywhere in Quebec. Luckily, DuProprio allows users to filter their
            search using these exact criteria.
          </p>
        </div>

        <div className="Image">
          <div className="image">
            <img src={"assets/screens/Filters.PNG"}></img>
            <p className="desc">DuProprio Search Filters.</p>
          </div>
        </div>

        <div className="text">
          <p>
            Using{" "}
            <a href="https://beautiful-soup-4.readthedocs.io/en/latest/">
              Beautiful Soup
            </a>
            , I was able to build two Python scripts to scrape past listings
            from DuProprio. The first script goes through all the pages of
            listing thumbnails and acquires the listings’ individual links.{" "}
          </p>
        </div>

        <div className="Image">
          <div className="image">
            <img src={"assets/screens/Thumbnails.PNG"}></img>
            <p className="desc">Listing thumbnails.</p>
          </div>
        </div>

        <div className="Image">
          <div className="image">
            <img src={"assets/screens/Links.PNG"}></img>
            <p className="desc">
              DuProprio individual listing links in a .txt file.
            </p>
          </div>
        </div>

        <div className="text">
          <p>
            The second script goes through all the scraped links and loads them
            one by one using Beautiful Soup. By reading the HTML tags in the
            loaded pages, we can scrape the following data points for every
            listing page.
          </p>
        </div>

        <div className="Image">
          <div className="image">
            <img src={"assets/screens/Tags.PNG"}></img>
            <p className="desc">
              HTML Tag for number of bedrooms inside listing page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scraping;
