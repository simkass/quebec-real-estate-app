import "./preprocessing.styles.scss";

const Preprocessing = () => {
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
          Thankfully, all listings have a subtype value, which means the dataset
          has no NaN values in this column. However, among the 18 possible
          subtype values, 3 of them appear less than a thousand times.
        </p>
      </div>
    </div>
  );
};

export default Preprocessing;
