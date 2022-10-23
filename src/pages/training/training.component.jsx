import "./training.styles.scss";

import CsvTable from "../../components/table/table.component";

const Training = () => {
  const columns = [
    "Location_Beauport",
    "Location_Portneuf",
    "Location_Gatineau",
    "Location_Fabreville",
    "Location_Côte-Nord",
    "Subtype",
    "Living Area",
    "Lot Dimensions",
    "Bedrooms",
    "Bathrooms",
    "Levels",
    "Listing Date",
    "Listing Year",
    "Year of Construction",
    "Age",
    "Price",
  ];

  return (
    <div className="Training">
      <div className="training">
        <h1>Training the Model.</h1>
        <p>
          The first step of training a model is to encode and normalize our
          data.
        </p>
        <h2>Encoding non numerical values.</h2>
        <p>
          Encoding is the process of converting information into a unique code.
          When encoding, we maitain a coding table that maps the possible inputs
          to their corresponding codes. In our case, the goal is to take inputs
          that a neural network cannot read (i.e. our categorical string data)
          and encode them into numerical values which we can feed to our
          network. There are many forms of encoding which are well summarized in{" "}
          <a href="https://towardsdatascience.com/6-ways-to-encode-features-for-machine-learning-algorithms-21593f6238b0">
            this article
          </a>
          .
        </p>
        <br></br>
        <p>
          The columns we need to encode are <b>Subtype</b> and <b>Location</b>.
          The possible values for these features have no logical order, we don't
          want to give a higher numerical code to one value rather than the
          other. By that logic, the optimal method is One-Hot Encoding. Here's a
          sample of what the dataset will look like after encoding location
          values.
        </p>
        <CsvTable
          filepath="./assets/data/processed_sample_encoded.csv"
          columns={columns}
          columns_display={columns}
          white_text={true}
        />
        <p>
          The full dataset would have many more columns since we have 111
          possible location values. You can also imagine what the dataset would
          look like after encoding the Subtype column.
        </p>
      </div>
    </div>
  );
};

export default Training;
