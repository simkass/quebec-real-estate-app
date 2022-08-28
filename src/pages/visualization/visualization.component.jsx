import "./visualization.styles.scss";

import Plot from "../../components/plot/plot.component";

const Visualization = () => {
  return (
    <div className="Visualization">
      <div className="visualization">
        <h1>Visualizing the Data.</h1>
        <h2>Correlations between features</h2>
        <Plot path="./assets/visualization/corr-map.png" title="" />
      </div>
    </div>
  );
};

export default Visualization;
