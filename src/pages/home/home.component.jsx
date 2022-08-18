import "./home.styles.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="home">
        <div className="home-picture">
          <div className="home-picture-img">
            <img src={"./assets/pictures/Home.jpg"} />
          </div>
          <div className="home-picture-desc">
            <p>
              Home located in Lac-Brome, Quebec - Designed by Thomas Balaban
            </p>
          </div>
        </div>
        <div className="home-text">
          <div>
            <h1>Quebec —</h1>
            <h1>Housing Market Analysis</h1>
          </div>

          <div>
            <p>
              By designing a web scraper, I was able to gather information on
              over 100k sold homes from the past 15 years in Quebec. I then used
              visualization tools to generate a series of graphs offering a
              unique insight into Quebec's housing market. Finally, I designed a
              neural network using Tensorflow. This allowed me to train a model
              capable of predicting a home's final selling price with a 15%
              margin of error.
            </p>
          </div>
          <div>
            <h2>Scroll to learn more.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
