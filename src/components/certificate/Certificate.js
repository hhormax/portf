import "./style.css";

const Certificate = ({ img, link }) => {
  return (
    <div className="certificate">
      <a href={link} className="link" target="_blank" rel="noreferrer">
        <img src={img} className="image" alt="img" />
      </a>
    </div>
  );
};

export default Certificate;
