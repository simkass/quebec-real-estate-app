import "./scraping.styles.scss";

import Image from "../../components/image/image.component";
import CsvTable from "../../components/table/table.component";

const Scraping = () => {
  const columns = [
    "subtype",
    "living_area",
    "lot_dimensions",
    "bedrooms",
    "bathrooms",
    "levels",
    "location",
    "listing_date",
    "year_of_construction",
    "price",
  ];
  const columns_display = [
    "Subtype",
    "Living Area",
    "Lot Dimensions",
    "Bedrooms",
    "Bathrooms",
    "Levels",
    "Location",
    "Listing Date",
    "Year of Construction",
    "Price",
  ];

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
        <Image
          path="./assets/screenshots/Thumbnails.png"
          description="DuProprio Listing Thumbnails."
        />
        <p>I obtained individual links as such:</p>
        <Image
          path="./assets/screenshots/Links.png"
          description="DuProprio individual listing links in a .txt file."
        />
        <p>
          The second script goes through all the scraped links and loads them
          one by one using Beautiful Soup. By reading the HTML tags in the
          loaded pages, we can scrape the following data points for every
          listing page.
        </p>
        <Image
          path="./assets/screenshots/Tags.png"
          description="HTML Tag for number of bedrooms inside listing page."
        />
        <p>Here's a sample of the final scraped dataset of listings:</p>
        <CsvTable
          filepath="./assets/data/raw_sample.csv"
          columns={columns}
          columns_display={columns_display}
        />
      </div>
    </div>
  );
};

export default Scraping;
