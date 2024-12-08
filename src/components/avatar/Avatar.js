import logo from "../../img/icons/avatar.webp";
import "./style.css";

const Avatar = () => {
  return (
    <div>
      <img src={logo} className="img" alt="avatar" />
    </div>
  );
};

export default Avatar;
