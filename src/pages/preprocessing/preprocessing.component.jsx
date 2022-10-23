import "./preprocessing.styles.scss";

import Image from "../../components/image/image.component";
import Plot from "../../components/plot/plot.component";
import CsvTable from "../../components/table/table.component";

const Preprocessing = () => {
  const columns = ["Feature", "Minimum Value", "Maximum Value"];
  const nan_columns = [
    "Feature",
    "NaN Replacement Method",
    "NaN Replacement Value",
  ];
  const processed_columns = [
    "Subtype",
    "Style",
    "Living Area",
    "Lot Dimensions",
    "Bedrooms",
    "Bathrooms",
    "Levels",
    "Listing Date",
    "Listing Year",
    "Year of Construction",
    "Age",
    "Location",
    "Price",
  ];

  return (
    <div className="Preprocessing">
      <div className="preprocessing">
        <h1>Cleaning the Data.</h1>
        <p>
          As you may know, it's crucial to clean and format our dataset if we
          hope to use it for analytical and machine learning purposes. The
          following sections briefly explain how every column of the raw tabular
          data was cleaned and rendered consumable.
        </p>
        <h2>Subtype</h2>
        <p>
          Thankfully, all listings have a subtype value, we have no listing with
          a Null subtype. However, among the 18 possible subtype values, 11 of
          them appear less than 1% of the time. This means it becomes difficult
          to predict their impact on a listing value, we simply do not have
          enough information about them. These values are dropped and we are
          left with the following subtypes which all individually constitute at
          least 2% of the data.
        </p>
        <p className="list">
          Bungalow, 2 Storey, Condominium, Semi-detached, Townhouse,
          Bi-generation, Split Level, 1 1/2 Storey.
        </p>
        <h2>Living Area & Lot Dimensions</h2>
        <p>
          These two continuous numerical features have been filtered by limiting
          them to a specific interval of values in order to remove outliers. To
          determine the interval of acceptable values for a specific feature, we
          consider two things: the feature's typical interval of values, and our
          dataset's distribution of values. For example, consider the following
          histogram for the Living Area feature.
        </p>
        <Plot
          path="./assets/plots/living-area-hist-orig.png"
          title="Distribution of values for 'Living Area'"
        />
        <p>
          This histogram clearly shows that most residential units have a living
          area between 500 and 4000 square feet. This is in line with the{" "}
          <a href="https://paradisedevelopments.com/blog/communities/average-house-size-in-canada/?doing_wp_cron=1661624241.1905450820922851562500">
            typical living area of Canadian homes.
          </a>{" "}
          After adjusting the interval of values for lot dimensions in a similar
          fashion, we get the following histograms.
        </p>
        <div className="two-plots">
          <Plot
            path="./assets/plots/living-area-hist.png"
            title="Distribution of values for 'Living Area' after filtering"
          />
          <Plot
            path="./assets/plots/lot-dimensions-hist.png"
            title="Distribution of values for 'Lot Dimensions' after filtering"
          />
        </div>
        <h2>Bedrooms, Bathrooms & Levels</h2>
        <p>
          Discrete numerical features can treated as categorical when their
          possible values are few. Therefore, we can treat them the same way as
          the Subtype column and pick categories based on their number of
          occurences in the dataset. With that logic, we end up with the
          following interval of values for these features.
        </p>
        <CsvTable
          filepath="./assets/data/intervals.csv"
          columns={columns}
          columns_display={columns}
        />
        <h2>Listing Date</h2>
        <p>
          Listing dates were scraped in a YYYYMM format. They were simply
          transformed into Datetime objects with the day set to the first of the
          month.
        </p>
        <h2>Year of Construction</h2>
        <p>
          While technically a date, no information about the month or the day is
          given in the scraped data. Therefore, the values were simply
          transformed into integers. They were then filtered according to an
          interval that goes from 1850 to 2021.
        </p>
        <Plot
          path="./assets/plots/year-of-construction-hist.png"
          title="Distribution of values for 'Year of Construction' after filtering"
        />
        <h2>Price</h2>
        <p>
          Price is the label of our dataset. Obviously, a row without a price is
          useless and is therefore dropped. Further more, our dataset include a
          few very low price homes and a few very high priced homes. Similarly
          to what we did with lot dimensions and living areas, we limit our
          price values to a specific interval based on our calculated
          distribution of possible values. In this case, we settle for homes
          that sold for prices between 20 000 CAD$ and 1 million CAD$.
        </p>
        <Plot
          path="./assets/plots/price-hist.png"
          title="Distribution of values for 'Price' after filtering"
        />
        <h2>NaN Values</h2>
        <p>
          When they are scarce, rows containing NaN values can be dropped. This
          way, we avoid reducing the quality of our dataset by sacrificing a
          small portion of it. However, if dropping these rows reduce
          considerably the size of our dataset, it might be worth sacrificing
          its quality instead. To do that, we replace NaN values with ones that
          accurately represent the rest of the data. This reduces the quality of
          our dataset because part of the data isn't real anymore, it's
          estimated using the statistical parameters of the group it belongs to.
          The following table indicates how NaN values were replaced (or
          dropped) for every feature.
        </p>
        <CsvTable
          filepath="./assets/data/nans.csv"
          columns={nan_columns}
          columns_display={nan_columns}
        />
        <h2>Location</h2>
        <p>
          I kept this column for last because it is by far the most complicated
          one to preprocess. in our dataset, this categorical feature has over
          1000 unique values. As you can guess, a lot of these locations have
          very small population and consequently, very few listings. Let's
          analyse this further by looking at a distribution graph of the number
          of listings per location values.
        </p>
        <Plot
          path="./assets/plots/raw-locations-dist.png"
          title="Distribution of number of listings per locations"
        />
        <p>
          The plot shows quite clearly that over 40% of all location values have
          less than 100 listings. The distribution plot is so skewed towards
          small values that I had to use a log scale on the x axis. The
          conclusion is that we simply can't fix this issue by removing all
          locations with too few values, this would wipe out almost half of our
          (already small) dataset. We need another, more creative solution.
        </p>
        <br />
        <p>
          Before diving into the solution, we need to talk about location
          granularity.
        </p>
        <h3>Location Granularity</h3>
        <div className="quote">
          <p>
            <a href="https://www.chemeurope.com/en/encyclopedia/Granularity.html">
              "Granularity is the relative size, scale, level of detail or depth
              of penetration that characterizes an object"
            </a>
          </p>
        </div>
        <p>
          For location values, granularity refers to the specificity of the
          geographical boundary being represented. For example, when locating
          your home, stating the full civic address is far more specific than
          just mentionning the city or even the state.
        </p>
        <br />
        <p>
          In our case, all of our 160k+ listings are contained within the
          province of Quebec. Quebec is therefore our least granular
          geographical boundary. The most granular values are all the individual
          home addresses which can only contain 1 listing. Note that this is
          theoretical as we did not actually scrape the individual addresses.
        </p>
        <CsvTable
          filepath="./assets/data/granularities.csv"
          columns={[
            "Granularity Level",
            "Name",
            "Examples",
            "Typical Population Size",
          ]}
          columns_display={[
            "Granularity Level",
            "Name",
            "Examples",
            "Typical Population Size",
          ]}
        />
        <br />
        <p>
          Our solution will be to adjust the granularity of all our unique
          location values to end up with fewer possibilities that all have a
          similar weight (amount of listings). This will help us get a more even
          distribution of number of listings per locations.
        </p>
        <h3>The Solution</h3>
        <p>
          The first step of our solution is to define the list of possible
          locations. When combined, the chosen locations must cover the entire
          territory of Quebec. To maintain an even distribution of listings per
          location, we will ajust the granularities depending on population
          density (the amount of listings is heavily correlated with population
          number). For example, location values in the Montreal area are going
          to be more granular than in the region of Bas-Saint-Laurent since the
          former has a higher population density than the latter.
        </p>
        <h4>List of possible locations</h4>
        <p>
          Defining the list of possible locations required a lot of trial and
          error to get a relatively even number of listings per location. In the
          end, I used a combination of{" "}
          <a href="https://en.wikipedia.org/wiki/List_of_regions_of_Quebec">
            Administrative Regions
          </a>
          ,{" "}
          <a href="https://en.wikipedia.org/wiki/List_of_regional_county_municipalities_and_equivalent_territories_in_Quebec">
            Regional County Municipalities
          </a>
          , and{" "}
          <a href="https://en.wikipedia.org/wiki/List_of_boroughs_in_Quebec">
            Boroughs
          </a>{" "}
          to obtain a list of 112 locations which is a 90% decrease from our
          original 1171 unique locations. This significant decrease in the
          number of possible values should help our eventual model's accuracy.
          The next and final step is to map the original scraped values to the
          ones in our new list of 112 locations.
        </p>
        <h4>Mapping original locations</h4>
        <p>
          To map the original 1171 locations to the ones in our curated list, we
          must first compute the geographical coordinates of our original
          locations and the geographical boundaries of our curated locations.
          Then, we go through all the geographical coordinates and find the
          boundary they belong to. For example, one of our original location is
          the city of Bromont. Its geographical coordinates are 45.2852° N,
          72.6872° W
        </p>
        <Image
          path="./assets/screenshots/Bromont.png"
          description="Bromont Geographical Coordinates Point."
        />
        <p>
          By testing with the boundaries in our curated list, we find that
          Bromont belongs to the regional county of Brome-Mississquoi. Its
          boundary is shown below.
        </p>
        <Image
          path="./assets/screenshots/Bromont2.png"
          description="Bromont Geographical Coordinates Point inside of Brome-Mississquoi."
        />
        <h2>Final Dataset</h2>
        <p>
          After all these preprocessing operations, we are left with a final
          dataset of 88,962 listings. Here's a sample...
        </p>
        <CsvTable
          filepath="./assets/data/processed_sample.csv"
          columns={processed_columns}
          columns_display={processed_columns}
        />
        <br></br>
        <p>It's now time to visualize the data.</p>
      </div>
    </div>
  );
};

export default Preprocessing;
