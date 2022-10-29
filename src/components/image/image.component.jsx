import "./image.styles.scss";

const Image = ({ path, description }) => {
  return (
    <div className="Image">
      <div className="image">
        <img src={path} />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Image;
