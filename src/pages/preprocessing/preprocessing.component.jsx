import "./preprocessing.styles.scss";

import Plot from "../../components/plot/plot.component";
import CsvTable from "../../components/table/table.component";

const Preprocessing = () => {
  const columns = ["Feature", "Minimum Value", "Maximum Value"];

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
      </div>
    </div>
  );
};

export default Preprocessing;
