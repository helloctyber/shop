import "./style.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Quicklink({label,color}) {

  return (
    <div className="Quicklinkcontainer">
      <div className="float-child">
        <FaHeart color={color} />
        {label}
      </div>
    </div>
  );
}
