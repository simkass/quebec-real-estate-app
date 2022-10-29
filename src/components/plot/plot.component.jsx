import "./plot.styles.scss";

const Plot = ({ path, title }) => {
  return (
    <div className="Plot">
      <div className="plot">
        <h3>{title}</h3>
        <img src={path} />
      </div>
    </div>
  );
};

export default Plot;
