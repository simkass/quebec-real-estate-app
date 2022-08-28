import "./visualization.styles.scss";

import Plot from "../../components/plot/plot.component";

const Visualization = () => {
  return (
    <div className="Visualization">
      <div className="visualization">
        <h1>Visualizing the Data.</h1>
        <h2>Correlations between features</h2>
        <p>
          Looking at the correlation heatmap between features, we can conclude
          that the most influental numerical features on our Price label are
          Living Area, Bedrooms, Bathrooms and Listing Year.
        </p>
        <Plot path="./assets/visualization/corr-map.png" title="" />
        <p>Let's dive deeper into these numerical features.</p>
        <h2>Living Area</h2>
        <p>
          The following regression plot clearly shows a linear relationship
          between Living Area and Price.
        </p>
        <Plot path="./assets/visualization/livingarea-regplot.png" title="" />
        <p>
          We can confirm this relationship by transforming the feature into a
          categorical one and plotting a bar chart. This shows that the higher
          ranges of Living Area have a higher mean selling price.
        </p>
        <Plot path="./assets/visualization/livingarea-barplot.png" title="" />
        <h2>Lot Dimensions</h2>
        <p>
          With the same regression plot, we cannot come to the same conclusion
          for Lot Dimensions. This validates the almost null correlation value
          we saw in the correlation heat map earlier.
        </p>
        <Plot
          path="./assets/visualization/lotdimensions-regplot.png"
          title=""
        />
        <h2>Bedrooms</h2>
        <p>
          The correlation between Price and number of bedrooms is shown in the
          following regression plot.
        </p>
        <Plot path="./assets/visualization/bedrooms-regplot.png" title="" />
        <p>
          We can take a closer look by displaying a violin plot. This shows the
          price distribution for each possible values of bedrooms.
        </p>
        <Plot path="./assets/visualization/bedrooms-violinplot.png" title="" />
        <h2>Bathrooms</h2>
        <p>
          A simple bar plot can show the relationship between Price and number
          of bathrooms.
        </p>
        <Plot path="./assets/visualization/bathrooms-barplot.png" title="" />
        <h2>Levels</h2>
        <p>
          We can come to a similar conclusion with the same plot for Levels.
        </p>
        <Plot path="./assets/visualization/levels-barplot.png" title="" />
        <h2>Listing Year</h2>
        <p>
          This feature is perhaps the most influental numerical feature. As we
          all know, housing prices are showing a clear upwards tendency over the
          years. The following regression plot displays this relationship very
          well.
        </p>
        <Plot path="./assets/visualization/listingyear-regplot.png" title="" />
        <p>
          One interesting phenomenon is the obvious shift to the right among the
          price distributions for every Listing Year. As we advance, we can see
          that housing prices are distributed more towards higher values. The
          shifts between 2019, 2020 and 2021 are the most flagrant ones.
        </p>
        <Plot
          path="./assets/visualization/listingyear-pricedisplot.png"
          title=""
        />
        <h2>Age</h2>
        <p>
          One would expect newer homes to be more expensive than older ones.
          However, the correlation heatmap shows a very weak relationship
          between the age of a home and its selling price. This regression plot
          shows that there is indeed no clear correlation between the two.
        </p>
        <Plot path="./assets/visualization/age-regplot.png" title="" />
        <p>
          Let's now see how categorical features impact the value of a home.
        </p>
        <h2>Subtype</h2>
        <p>
          The following bar plot displays the mean value of a home for different
          subtypes. We can conclude that the subtype of a home has a significant
          impact on its value.
        </p>
        <Plot path="./assets/visualization/subtype-barplot.png" title="" />
        <h2>Location</h2>
      </div>
    </div>
  );
};

export default Visualization;
