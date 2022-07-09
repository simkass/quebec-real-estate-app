import "./Preprocessing.css";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import Papa from "papaparse";

function Preprocessing() {
  const [rawRows, setRows] = React.useState([]);
  React.useEffect(() => {
    Papa.parse("assets/data/raw_sample.csv", {
      download: true,
      header: true,
      complete: (data) => {
        setRows(data.data);
      },
    });
  }, []);

  const [rows, mapRows] = React.useState([]);
  React.useEffect(() => {
    Papa.parse("assets/data/location_mapper_sample.csv", {
      download: true,
      header: true,
      complete: (data) => {
        mapRows(data.data);
      },
    });
  }, []);

  return (
    <div className="Preprocessing">
      <div className="preprocessing">
        <div className="title">
          <h1>Cleaning the Data.</h1>
        </div>

        <div className="text">
          <p>
            In its raw format, the scraped data has 169 894 listings. Here's a
            sample.
          </p>
        </div>

        <div className="table">
          <TableContainer sx={{width: "100%"}}>
          <Table size="small" sx={{width: "max-content"}}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Subtype</b>
                </TableCell>
                <TableCell>
                  <b>Style</b>
                </TableCell>
                <TableCell>
                  <b>Living Area</b>
                </TableCell>
                <TableCell>
                  <b>Lot Dimensions</b>
                </TableCell>
                <TableCell>
                  <b>Bedrooms</b>
                </TableCell>
                <TableCell>
                  <b>Bathrooms</b>
                </TableCell>
                <TableCell>
                  <b>Levels</b>
                </TableCell>
                <TableCell>
                  <b>Location</b>
                </TableCell>
                <TableCell>
                  <b>Listing Date</b>
                </TableCell>
                <TableCell>
                  <b>Year of Construction</b>
                </TableCell>
                <TableCell>
                  <b>Municipal Evaluation</b>
                </TableCell>
                <TableCell>
                  <b>Price</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rawRows.map((row) => (
                <TableRow>
                  <TableCell align="left">{row.subtype}</TableCell>
                  <TableCell align="left">{row.style}</TableCell>
                  <TableCell align="left">{row.living_area}</TableCell>
                  <TableCell align="left">{row.lot_dimensions}</TableCell>
                  <TableCell align="left">{row.bedrooms}</TableCell>
                  <TableCell align="left">{row.bathrooms}</TableCell>
                  <TableCell align="left">{row.levels}</TableCell>
                  <TableCell align="left">{row.location}</TableCell>
                  <TableCell align="left">{row.listing_date}</TableCell>
                  <TableCell align="left">{row.year_of_construction}</TableCell>
                  <TableCell align="left">{row.municipal_eval}</TableCell>
                  <TableCell align="left">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table></TableContainer>
        </div>

        <div className="text">
          <p>
            As you may know, it's crucial to clean and format this data if we
            hope to use it for analytical and machine learning purposes. The
            following sections briefly explain how every column of the raw
            tabular data was cleaned and rendered consumable.
          </p>
        </div>

        <div className="text">
          <h2>Subtype & Style</h2>
          <p>
            Subtype and Style are two very similar categorical features. In fact
            they share a few possible values that are identical such as 2 Storey
            and Semi-Detached. The values given by subtype are in my opinion
            more informative than the style. For example, the style column
            doesn't have any value for condos whereas the subtype will mark them
            as Condominiums. For this reason, the style feature is dropped and
            the subtype is kept. The raw data has 18 unique subtype values, none
            of them are NaN. However, some of the possible values have less than
            a thousand occurences. This means they represent less than 1% of the
            data, making them rather insignificant. For this reason, they are
            dropped and we are left with the following 8 possible subtype
            values:
          </p>

          <p className="list">
            Bungalow, 2 Storey, Condominium, Semi-detached, Townhouse,
            Bi-generation, Split Level, 1 1/2 Storey.
          </p>

          <h2>Living Area & Lot Dimensions</h2>
          <p>
            These two continuous numerical features have been filtered by
            limiting them to a specific interval of values in order to remove
            outliers. To determine the interval of acceptable values for a
            specific feature, we consider two things: the feature's typical
            interval of values, and our dataset's distribution of values. For
            example, consider the following histogram for the Living Area
            feature.
          </p>
        </div>

        <div className="Image">
          <div className="image">
            <img src={"assets/figures/living-area-hist-orig.PNG"}></img>
            <p className="desc">Distribution of values for Living Area.</p>
          </div>
        </div>

        <div className="text">
          <p>
            Looking at this histogram clearly shows that most residential units
            have a living area between 500 and 3000 square feet. This makes a
            lot of sense since a typical house will have a living area of around
            1000 to 2000 square feet. After adjusting our intervals, we get the
            following histograms for living area and lot dimensions.
          </p>
        </div>

        <div className="Image">
          <div className="image">
            <img src={"assets/figures/living-area-hist.PNG"}></img>
            <img src={"assets/figures/lot-dimensions-hist.PNG"}></img>
            <p className="desc">
              Adjusted distribution of values for Living Area and Lot
              Dimensions.
            </p>
          </div>
        </div>

        <div className="text">
          <h2>Bedrooms, Bathrooms & Levels</h2>
          <p>
            Discrete numerical features can treated as categorical when their
            possible values are few. Based on the dataset, The 3 features have
            the following intervals:
          </p>
        </div>

        <div className="table small-table">
        <TableContainer sx={{width: "100%"}}>
          <Table size="small" sx={{width: "max-content", margin:"auto"}}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Feature</b>
                </TableCell>
                <TableCell>
                  <b>Minimum Value</b>
                </TableCell>
                <TableCell>
                  <b>Maximum Value</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">Bedrooms</TableCell>
                <TableCell align="left">1</TableCell>
                <TableCell align="left">7</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Bathrooms</TableCell>
                <TableCell align="left">1</TableCell>
                <TableCell align="left">5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Levels</TableCell>
                <TableCell align="left">1</TableCell>
                <TableCell align="left">4</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </TableContainer>
        </div>

        <div className="text">
          <p>
            Keep in mind that while there exists homes with more than 4
            bathrooms and 7 bedrooms, they are part of a very niche market that
            is not highly covered by our dataset.
          </p>
          <p>
            Also note that the values for these features have been converted to
            integers rather than their original floating point format.
          </p>
        </div>

        <div className="text">
          <h2>Listing Date</h2>
          <p>
            Listing dates were scraped in a YYYYMM format. They were simply
            transformed into Datetime objects with the day set to the first of
            the month.
          </p>
        </div>

        <div className="text">
          <h2>Year of Construction</h2>
          <p>
            While technically a date, no information about the month or the day
            is given in the scraped data. Therefore, the values were simply
            transformed into integers.{" "}
          </p>
        </div>

        <div className="text">
          <h2>Municipal Evaluation</h2>
          <p>
            If you're a home owner, you're most likely paying property taxes
            that are proportional to the value of your property. Your city will
            evaluate your home's market value every few years to make sure your
            property taxes are adequate.
          </p>

          <p>
            While very interesting, I decided to drop this column all togheter
            for the following two reasons:
          </p>
          <p className="numbered">
            1. I have no information regarding the date of the municipal
            assessment, meaning I can't tell how recent and up to date the
            evaluation is. This makes it rather unreliable because I wouldn't
            want to use a 10 year old evaluation the same way I would a 2 year
            old one.
          </p>
          <p className="numbered">
            2. One of my goals is to train a model to predict home prices. It
            doesn't make sense to use a human prediction as a feature in an AI
            model trying to output the same prediction.
          </p>
        </div>

        <div className="text">
          <h2>Price</h2>
          <p>
            Price is the label of our dataset. Obviously, a row without a price
            is useless and is therefore dropped. Further more, our dataset
            include a few very low price homes and a few very high priced homes.
            Similarly to what we did with lot dimensions and living areas, we
            limit our price values to a specific interval based on our
            calculated distribution of possible values. In this case, we settle
            for homes that sold for prices between 20 000 CAD$ and 1 million
            CAD$.
          </p>
        </div>

        <div className="text">
          <h2>Location</h2>
          <p>
            Location is without a doubt the most difficult feature to process.
            As you'll see later, a home's market value in Quebec is highly
            dependant on its geographical location. Therefore, this feature is
            highly important if we want to train a high quality prediction
            model. However, the dataset simply has too many different location
            values! This means that we simply don't have enough data for a good
            chunk of these values.
          </p>
          <p>
            For example, one possible location is Saint-Simon, a small town in
            southwesten Quebec with a population under 1500. With a town so
            small, it's not that surprising to find out it has only 18 listings
            in the the raw dataset. This means that we simply do not hold enough
            information to accurately measure the real estate market in
            Saint-Simon. However, this town is only 15 minutes away from
            Saint-Hyacinthe (population: 60 000). In fact, the latter has around
            20 smaller towns surrounding it like Saint-Simon. If we group all of
            them together under one label, we suddenly have enough listings to
            accurately represent the real estate market of Saint-Hyacinthe and
            its surroundings (Saint-Hyacinthe Metropolitan Area &#x1F605;).
          </p>
          <p>
            We must find a way to categorize our 1141 unique locations in a way
            that would reduce the number of possible values while still
            maintaining a significant amount of information. I tested multiple
            ways of mapping the locations such as finding the closest city
            center (like described in the previous paragraph) or grouping by
            administrative regions. The adequate mapping strategy is simply the
            one that yields the most accurate AI model. I'm going to spare you
            the trial and error process I followed and just describe to you the
            chosen mapping strategy.
          </p>
          <p>
            Simply put, I curated a list of around 120 population centers based
            on population and mapped all raw locations to their closest
            geographical population center. The population centers consist of
            cities with a population over 100k. Montreal is the biggest city in
            the province and has a lot of boroughs with big populations. In our
            raw dataset, most of these boroughs have enough listings to have a
            significant impact on our AI model. Therefore, we maintain a certain
            level of granularity in Montreal by categorizing Montreal listings
            by boroughs rather than simply giving them a "Montreal" label. On
            final note is that the distance calculated between population
            centers is simply the shortest direct line between the two
            locations. (Calculated using{" "}
            <a href="https://geopy.readthedocs.io/en/stable/" target="_blank">
              GeoPy Python Library
            </a>
            ).
          </p>
          <p>
            From over a thousand unique locations to a little over 100 is a
            significant 10x decrease which should help our model a lot. Here's a
            sample of the final mapping table:
          </p>
        </div>

        <div className="small-table">
        <TableContainer sx={{width: "100%"}}>
          <Table size="small" sx={{width: "max-content", margin:"auto"}}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Location</b>
                </TableCell>
                <TableCell>
                  <b>Mapping</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow>
                  <TableCell align="left">{row.Location}</TableCell>
                  <TableCell align="left">{row.Mapping}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
        </div>

        <div className="text">
          <p></p>
        </div>

        <div className="text">
          <h2>NaN Values</h2>
          <p>
            When they are scarce, rows containing NaN values can be dropped.
            This way, we avoid reducing the quality of our dataset by
            sacrificing a small portion of it. However, if dropping these rows
            reduce considerably the size of our dataset, it might be worth
            sacrificing its quality instead. To do that, we replace NaN values
            with ones that accurately represent the rest of the data. This
            reduces the quality of our dataset because part of the data isn't
            real anymore, it's estimated using the statistical parameters of the
            group it belongs to. The following table indicates how NaN values
            were replaced (or dropped) for every feature.
          </p>
        </div>

        <div className="table small-table">
        <TableContainer sx={{width: "100%"}}>
          <Table size="small" sx={{width: "max-content", margin:"auto"}}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Feature</b>
                </TableCell>
                <TableCell>
                  <b>NaN Replacement Method</b>
                </TableCell>
                <TableCell>
                  <b>NaN Replacement Value</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">Subtype</TableCell>
                <TableCell align="left">Dropped</TableCell>
                <TableCell align="left">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Living Area</TableCell>
                <TableCell align="left">Mean</TableCell>
                <TableCell align="left">1350 sq. ft</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Lot Dimensions</TableCell>
                <TableCell align="left">Mean</TableCell>
                <TableCell align="left">7500 sq. ft</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Bedrooms</TableCell>
                <TableCell align="left">Dropped</TableCell>
                <TableCell align="left">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Bathrooms</TableCell>
                <TableCell align="left">Dropped</TableCell>
                <TableCell align="left">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Levels</TableCell>
                <TableCell align="left">Dropped</TableCell>
                <TableCell align="left">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Listing Date</TableCell>
                <TableCell align="left">Dropped</TableCell>
                <TableCell align="left">-</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Year of Construction</TableCell>
                <TableCell align="left">Mean</TableCell>
                <TableCell align="left">1992</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Dropped</TableCell>
                <TableCell align="left">-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Preprocessing;
