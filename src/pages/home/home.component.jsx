import "./home.styles.scss";

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  // Add event listener
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowSize.width <= 1000;

  return (
    <div className="Home">
      <div className="home">
        <div className="home-picture">
          <div className="home-picture-img">
            <img src={"./assets/pictures/Home.jpg"} />
          </div>
          <div className="home-picture-desc">
            {isMobile ? (
              <>
                <p>Home located in Lac-Brome, Quebec</p>
                <p>Designed by Thomas Balaban</p>
              </>
            ) : (
              <p>
                Home located in Lac-Brome, Quebec - Designed by Thomas Balaban
              </p>
            )}
          </div>
        </div>
        <div className="home-text">
          <div>
            <h1>Quebec —</h1>
            <h1>Housing Market Analysis</h1>
            <br />
            <a
              href="https://github.com/simkass/quebec-real-estate-analysis"
              target="_blank"
            >
              <div className="github">
                <FaGithub size={20} />
                <b>GitHub</b>
              </div>
            </a>
          </div>

          <div>
            <p>
              By building a web scraper, I was able to gather information on
              nearly 100k sold homes from the past 15 years in Quebec. I used
              this data to generate a series of graphs exposing the most
              important features for home valuation. Finally, I used Keras to
              train a neural network that can predict a home's final selling
              price with a 15% margin of error.
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
