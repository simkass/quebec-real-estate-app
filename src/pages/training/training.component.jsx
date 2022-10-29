import "./training.styles.scss";

import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
    "Listing Year",
    "Age",
    "Price",
  ];

  const scaled_columns = [
    "Living Area",
    "Bedrooms",
    "Bathrooms",
    "Levels",
    "Listing Year",
    "Age",
    "Price",
  ];

  const inputLayerCode =
    "from keras.layers import Dense\nfrom keras.models import Sequential\n\nmodel = Sequential()\nmodel.add(Dense(units=500, input_dim=X_train.shape[-1], activation= 'relu'))";

  const hiddenLayersCode =
    "model.add(Dense(100, activation= 'relu'))\nmodel.add(Dense(50, activation= 'relu'))";

  const outputLayerCode = "model.add(Dense(1, activation= 'linear'))";

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
        />
        <br></br>
        <p>
          The full dataset would have many more columns since we have 111
          possible location values. You can also imagine what the dataset would
          look like after encoding the Subtype column.
        </p>
        <h2>Normalizing numerical values.</h2>
        <p>
          Before training our model, it's important to normalize all the
          numerical values to the same scale to avoid having one feature weigh
          more than the other. (see{" "}
          <a href="https://towardsdatascience.com/why-data-should-be-normalized-before-training-a-neural-network-c626b7f66c7d">
            this article
          </a>{" "}
          for a deeper explanation).
        </p>
        <br></br>
        <p>
          Here's what the dataset would like after standardizing our numerical
          values to a scale of 0 to 1. (Encoded columns are removed to improve
          readability).
        </p>
        <CsvTable
          filepath="./assets/data/scaled_sample.csv"
          columns={scaled_columns}
          columns_display={scaled_columns}
        />
        <br></br>
        <h2>Designing the Neural Network.</h2>
        <p>
          After all the steps of gathering, cleaning, encoding and scaling our
          data, we can finally feed them to a neural network for training. What
          we want to obtain after training our model, is a regression machine
          learning algorithm to predict our continuous label (price). To build
          our model, we will use the{" "}
          <a href="https://keras.io/">Keras machine learning library</a> for
          Python.
        </p>
        <h3>Input Layer</h3>
        <p>
          To start, we need to initiate a{" "}
          <a href="https://keras.io/api/models/sequential/">
            Keras Sequential class
          </a>{" "}
          which will allows us to stack neural network layers. We start with a{" "}
          <a href="https://keras.io/api/layers/core_layers/dense/">
            Dense layer
          </a>{" "}
          of 500 neurons. A{" "}
          <a href="https://analyticsindiamag.com/a-complete-understanding-of-dense-layers-in-neural-networks/">
            dense, or densely connected layer
          </a>{" "}
          is a layer where each neuron receives inputs from all neurons of the
          previous layer and feeds outputs into all neurons of the next layer.
        </p>
        <div className="code-block">
          <SyntaxHighlighter
            language="python"
            showLineNumbers={true}
            style={stackoverflowLight}
          >
            {inputLayerCode}
          </SyntaxHighlighter>
        </div>
        <p>
          The input_dim argument defines the size of the tensors that will flow
          through our layers. The value should be the total number of features
          in our training data (X_train). The chosen activation function is ReLu
          (Rectified Linear Unit) simply because{" "}
          <a href="https://www.aitude.com/comparison-of-sigmoid-tanh-and-relu-activation-functions/#:~:text=ReLu%20is%20the%20best%20and,compare%20to%20other%20activation%20function.">
            it's considered to be the more advanced than tanh or sigmoid,
            mitigates the vanishing gradient problem
          </a>
          , and quite frankly, it's the one that gave me the best results after
          trial and error.
        </p>
        <h3>Hidden Layers</h3>
        <p>
          A typical rule of thumb when creating a neural network is to gradually
          decrease the number of neurons in our layers towards the target number
          of 1.
        </p>
        <div className="code-block">
          <SyntaxHighlighter
            language="python"
            showLineNumbers={true}
            startingLineNumber={6}
            style={stackoverflowLight}
          >
            {hiddenLayersCode}
          </SyntaxHighlighter>
        </div>
        <h3>Output Layer</h3>
        <p>
          The reason why we target a final layer of 1 neuron is simple... we
          want the model to output a single value: the predicted price. For the
          final layer, we pick a linear activation function because it simply
          multiplies the output by 1. It's sometimes called "no activation"
          since it just returns the value directly. This layer is only there to
          output the final predicted value.
        </p>
        <div className="code-block">
          <SyntaxHighlighter
            language="python"
            showLineNumbers={true}
            startingLineNumber={7}
            style={stackoverflowLight}
          >
            {outputLayerCode}
          </SyntaxHighlighter>
        </div>
        <h3>Compiling</h3>
        <h3>Training</h3>
        <h3>Results</h3>
        <h3>Conclusion</h3>
      </div>
    </div>
  );
};

export default Training;
