import Image from "../../components/image/image.component";

import "./scraping.styles.scss";

const Scraping = () => {
  return (
    <div className="Scraping">
      <div className="scraping">
        <h1>Acquiring the Data.</h1>
        <p>
          In Quebec, the only website (I could find) that openly exposes data on
          sold houses is <a href="https://duproprio.com/en">DuProprio</a>. This
          website allows homeowners to sell their houses without the use of an
          agent. The data I was interested in was sold homes and condos,
          anywhere in Quebec. Luckily, DuProprio allows users to filter their
          search using these exact criteria.
        </p>
        <Image
          path="./assets/screenshots/Filters.png"
          description="DuProprio Search Filters."
        />
        <p>
          Using{" "}
          <a href="https://beautiful-soup-4.readthedocs.io/en/latest/">
            Beautiful Soup
          </a>
          , I was able to build two Python scripts to scrape data from
          DuProprio. The first script goes through all the pages of listing
          thumbnails and acquires the listings’ individual links.
        </p>
      </div>
    </div>
  );
};

export default Scraping;
